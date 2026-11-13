import { generateContent } from "@/utils/gemini-api"

export interface TranslationCache {
  [key: string]: {
    [language: string]: string
  }
}

export interface TranslationProgress {
  total: number
  completed: number
  currentText: string
}

export class SmartTranslationService {
  private cache: TranslationCache = {}
  private readonly CACHE_KEY = "translation_cache"
  private readonly CACHE_EXPIRY = 7 * 24 * 60 * 60 * 1000 // 7 days

  constructor() {
    this.loadCache()
  }

  private loadCache(): void {
    if (typeof window === "undefined") return

    try {
      const cached = localStorage.getItem(this.CACHE_KEY)
      if (cached) {
        const { data, timestamp } = JSON.parse(cached)
        if (Date.now() - timestamp < this.CACHE_EXPIRY) {
          this.cache = data
        }
      }
    } catch (error) {
      console.error("Failed to load translation cache:", error)
    }
  }

  private saveCache(): void {
    if (typeof window === "undefined") return

    try {
      localStorage.setItem(
        this.CACHE_KEY,
        JSON.stringify({
          data: this.cache,
          timestamp: Date.now(),
        }),
      )
    } catch (error) {
      console.error("Failed to save translation cache:", error)
    }
  }

  async translateText(text: string, targetLanguage: string, sourceLanguage = "en"): Promise<string> {
    // Check cache first
    const cacheKey = `${sourceLanguage}-${text}`
    if (this.cache[cacheKey]?.[targetLanguage]) {
      return this.cache[cacheKey][targetLanguage]
    }

    try {
      const prompt = `Translate the following text from ${sourceLanguage} to ${targetLanguage}. 
      Provide only the translation without any additional text or explanations.
      Make sure the translation is professional and contextually appropriate.
      
      Text to translate: "${text}"`

      const result = await generateContent(prompt)

      if (result.success && result.data) {
        const translation = result.data.trim()

        // Cache the translation
        if (!this.cache[cacheKey]) {
          this.cache[cacheKey] = {}
        }
        this.cache[cacheKey][targetLanguage] = translation
        this.saveCache()

        return translation
      }
    } catch (error) {
      console.error("Translation failed:", error)
    }

    // Fallback to original text
    return text
  }

  async translateMultiple(
    texts: string[],
    targetLanguage: string,
    onProgress?: (progress: TranslationProgress) => void,
  ): Promise<string[]> {
    const results: string[] = []
    const total = texts.length

    for (let i = 0; i < texts.length; i++) {
      const text = texts[i]

      if (onProgress) {
        onProgress({
          total,
          completed: i,
          currentText: text.substring(0, 50) + (text.length > 50 ? "..." : ""),
        })
      }

      const translation = await this.translateText(text, targetLanguage)
      results.push(translation)
    }

    if (onProgress) {
      onProgress({
        total,
        completed: total,
        currentText: "Translation completed!",
      })
    }

    return results
  }

  clearCache(): void {
    this.cache = {}
    if (typeof window !== "undefined") {
      localStorage.removeItem(this.CACHE_KEY)
    }
  }
}

export const translationService = new SmartTranslationService()
