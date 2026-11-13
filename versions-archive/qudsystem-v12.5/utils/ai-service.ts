import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai"

// Initialize the Gemini API with the provided API key
const genAI = new GoogleGenerativeAI("AIzaSyBwuNIuqkRHYDI_q9_9l8obN4ORo8EOdLs")

// Safety settings for content generation
const safetySettings = [
  {
    category: HarmCategory.HARM_CATEGORY_HARASSMENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
  {
    category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
    threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
  },
]

// System prompt that includes information about QudSystem's expertise and language support
const SYSTEM_PROMPT = (language: string) => `
You are Qudy, the official AI assistant for QudSystem, a leading software development company.

About QudSystem:
- QudSystem is a trusted technology partner for established companies, startups, and individual clients
- They specialize in web development, mobile apps, enterprise solutions, and custom software
- They have expertise in various technologies including React, Next.js, Node.js, Three.js, and more
- QudSystem currently provides services in 22 Arab countries and is expanding to Europe, America, and worldwide

Your role is to:
1. Provide helpful information about QudSystem's services and expertise
2. Guide users through initiating new projects
3. Help with project improvements or updates
4. Assist in starting projects from scratch
5. Help users select the appropriate project type based on their needs
6. Gather necessary information to facilitate project requests

IMPORTANT: The user's current language is ${language}. Please respond in ${language}.

Be friendly, professional, and helpful. Ask clarifying questions when needed.
Keep responses concise and focused on helping the user with their specific needs.
Always promote QudSystem's expertise in a trustworthy and realistic way.
`

interface AIResponse {
  success: boolean
  data?: string
  error?: string
  modelUsed?: string
}

/**
 * Generates a text response from the AI model.
 * Includes retry logic and fallback to a lighter model on quota errors.
 */
export async function generateAIResponse(
  prompt: string,
  chatHistory: string[] = [],
  language = "en",
  retries = 0,
  modelName = "gemini-1.5-pro"
): Promise<AIResponse> {
  try {
    const model = genAI.getGenerativeModel({ model: modelName, safetySettings })
    
    // Prepare chat history context
    const chatContext = chatHistory.length > 0 ? "Previous conversation:\n" + chatHistory.join("\n") : ""
    
    // Combine system prompt, chat history, and user prompt
    const fullPrompt = `${SYSTEM_PROMPT(language)}

${chatContext}

User: ${prompt}

Qudy:`

    const result = await model.generateContent(fullPrompt)
    const response = result.response
    const text = response.text()
    
    return { success: true, data: text, modelUsed: modelName }
  } catch (error: any) {
    console.error(`Error generating content with AI (${modelName}):`, error)
    
    // Check for quota errors (429) or specific QuotaFailure violations
    const isQuotaError = 
      error.response?.status === 429 || 
      error.message?.includes("QuotaFailure") ||
      (error.details && JSON.stringify(error.details).includes("QuotaFailure"))
    
    if (isQuotaError) {
      if (modelName === "gemini-1.5-pro" && retries < 3) {
        // Retry with a lighter model (flash)
        console.warn(`Quota exceeded for ${modelName}. Retrying with gemini-1.5-flash...`)
        await new Promise(resolve => setTimeout(resolve, 250 * Math.pow(2, retries))) // Exponential back-off
        return generateAIResponse(prompt, chatHistory, language, retries + 1, "gemini-1.5-flash")
      } else if (modelName === "gemini-1.5-flash" && retries < 3) {
        // Retry flash model
        console.warn(`Quota exceeded for ${modelName}. Retrying...`)
        await new Promise(resolve => setTimeout(resolve, 250 * Math.pow(2, retries))) // Exponential back-off
        return generateAIResponse(prompt, chatHistory, language, retries + 1, "gemini-1.5-flash")
      } else {
        return {
          success: false,
          error: "AI quota exceeded. Please try again later or upgrade your plan."
        }
      }
    } else if (error.response?.status === 404 && modelName.includes("vision")) {
      // Handle 404 for vision models by falling back to non-vision model
      console.warn(`Vision model ${modelName} not found. Falling back to non-vision model.`)
      const fallbackModel = modelName.replace("-vision", "") // Remove -vision suffix
      return generateAIResponse(prompt, chatHistory, language, retries, fallbackModel)
    } else {
      return { success: false, error: error.message || "An unknown AI error occurred." }
    }
  }
}

/**
 * Generates a multimodal response (text and image) from the AI model.
 * Includes retry logic and fallback to a lighter model on quota errors.
 */
export async function generateResponseWithImage(
  prompt: string,
  imageUrl: string,
  chatHistory: string[] = [],
  language = "en",
  retries = 0,
  modelName = "gemini-1.5-pro"
): Promise<AIResponse> {
  try {
    const model = genAI.getGenerativeModel({ model: modelName, safetySettings })
    
    // Convert image URL to base64 or file part as required by the API
    const imageResponse = await fetch(imageUrl)
    const imageBlob = await imageResponse.blob()
    
    // Create image part
    const imageParts = [
      {
        inlineData: {
          data: await blobToBase64(imageBlob),
          mimeType: imageBlob.type,
        },
      },
    ]
    
    // Prepare chat history context
    const chatContext = chatHistory.length > 0 ? "Previous conversation:\n" + chatHistory.join("\n") : ""
    
    // Combine system prompt, chat history, and user prompt
    const textPrompt = `${SYSTEM_PROMPT(language)}

${chatContext}

User: ${prompt}

Qudy:`

    const result = await model.generateContent([textPrompt, ...imageParts])
    const response = result.response
    const text = response.text()
    
    return { success: true, data: text, modelUsed: modelName }
  } catch (error: any) {
    console.error(`Gemini vision failed (${modelName}):`, error)
    
    const isQuotaError = 
      error.response?.status === 429 || 
      error.message?.includes("QuotaFailure") ||
      (error.details && JSON.stringify(error.details).includes("QuotaFailure"))
    
    if (isQuotaError) {
      if (modelName === "gemini-1.5-pro" && retries < 3) {
        console.warn(`Quota exceeded for ${modelName}. Retrying with gemini-1.5-flash...`)
        await new Promise(resolve => setTimeout(resolve, 250 * Math.pow(2, retries)))
        return generateResponseWithImage(prompt, imageUrl, chatHistory, language, retries + 1, "gemini-1.5-flash")
      } else if (modelName === "gemini-1.5-flash" && retries < 3) {
        console.warn(`Quota exceeded for ${modelName}. Retrying...`)
        await new Promise(resolve => setTimeout(resolve, 250 * Math.pow(2, retries)))
        return generateResponseWithImage(prompt, imageUrl, chatHistory, language, retries + 1, "gemini-1.5-flash")
      } else {
        return {
          success: false,
          error: "AI quota exceeded for image generation. Please try again later or upgrade your plan."
        }
      }
    } else if (error.response?.status === 404) {
      // If the specific vision model is not found, try the base model
      console.warn(`Model ${modelName} not found. Falling back to base model.`)
      const fallbackModel = modelName.replace("-vision", "") // Remove -vision suffix
      return generateResponseWithImage(prompt, imageUrl, chatHistory, language, retries, fallbackModel)
    } else {
      return { success: false, error: error.message || "An unknown AI error occurred during image generation." }
    }
  }
}

/**
 * Converts a Blob to base64 string.
 */
function blobToBase64(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onloadend = () => {
      const base64String = reader.result as string
      // Remove the data URL prefix (e.g., "data:image/jpeg;base64,")
      const base64 = base64String.split(",")[1]
      resolve(base64)
    }
    reader.onerror = reject
    reader.readAsDataURL(blob)
  })
}
