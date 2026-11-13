import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai"

// Initialize the Gemini API with the provided API key
const genAI = new GoogleGenerativeAI("AIzaSyBwuNIuqkRHYDI_q9_9l8obN4ORo8EOdLs")

// Function to generate content using Gemini Pro
export async function generateContent(prompt: string) {
  try {
    // For text-only input, use the gemini-1.5-pro model
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-pro",
      safetySettings: [
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
      ],
    })

    const result = await model.generateContent(prompt)
    const response = await result.response
    const text = response.text()

    return { success: true, data: text }
  } catch (error) {
    console.error("Error generating content with Gemini:", error)
    return { success: false, error: "Failed to generate content" }
  }
}

// Function to generate content with image input
export async function generateContentWithImage(prompt: string, imageUrl: string) {
  try {
    // For multimodal input (text + image), use the gemini-1.5-pro-vision model
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-pro-vision",
      safetySettings: [
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
      ],
    })

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

    const result = await model.generateContent([prompt, ...imageParts])
    const response = await result.response
    const text = response.text()

    return { success: true, data: text }
  } catch (error) {
    console.error("Error generating content with image:", error)
    return { success: false, error: "Failed to generate content with image" }
  }
}

// Helper function to convert blob to base64
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
