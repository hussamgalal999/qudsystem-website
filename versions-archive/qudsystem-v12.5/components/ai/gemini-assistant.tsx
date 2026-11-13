"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Send, Loader2 } from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"
import { generateAIResponse } from "@/utils/ai-service"

export default function GeminiAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [prompt, setPrompt] = useState("")
  const [response, setResponse] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!prompt.trim()) return

    setIsLoading(true)
    setResponse("")

    try {
      const result = await generateAIResponse(prompt, [], "en")
      
      if (result.success) {
        setResponse(result.data || "I apologize, but I couldn't generate a response.")
      } else {
        // Provide user-friendly error messages
        let errorMessage = "I'm sorry, but I'm currently experiencing connectivity issues with my AI service. Please try again later or contact our support team for assistance."
        
        if (result.error?.includes("quota exceeded")) {
          errorMessage = "I'm currently experiencing high demand. Please try again in a few moments, or contact our support team for immediate assistance."
        } else if (result.error?.includes("rate limit")) {
          errorMessage = "I'm processing many requests right now. Please wait a moment and try again."
        }
        
        setResponse(errorMessage)
      }
    } catch (error) {
      console.error("Error:", error)
      setResponse("An error occurred. Please try again later.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Floating button to open the assistant */}
      <motion.button
        className="fixed bottom-20 right-6 z-40 p-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label="AI Assistant"
      >
        <Sparkles className="h-5 w-5" />
      </motion.button>

      {/* Assistant panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-32 right-6 z-40 w-[90vw] sm:w-[400px] max-h-[70vh] rounded-xl overflow-hidden shadow-2xl"
          >
            <Card className="border-neutral-200/50 dark:border-neutral-800/50 backdrop-blur-xl bg-white/90 dark:bg-neutral-900/90">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="h-5 w-5" />
                  QudSystem Assistant
                </CardTitle>
              </CardHeader>

              <CardContent className="p-4 max-h-[40vh] overflow-y-auto">
                {response ? (
                  <div className="prose dark:prose-invert prose-sm max-w-none">
                    <p>{response}</p>
                  </div>
                ) : (
                  <div className="text-center text-neutral-500 dark:text-neutral-400 py-8">
                    {isLoading ? (
                      <div className="flex flex-col items-center gap-2">
                        <Loader2 className="h-8 w-8 animate-spin" />
                        <p>Generating response...</p>
                      </div>
                    ) : (
                      <p>Ask me anything about QudSystem's services</p>
                    )}
                  </div>
                )}
              </CardContent>

              <CardFooter className="p-4 border-t border-neutral-200/50 dark:border-neutral-800/50">
                <form onSubmit={handleSubmit} className="w-full flex gap-2">
                  <Textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Ask a question..."
                    className="min-h-[60px] resize-none flex-grow"
                    disabled={isLoading}
                  />
                  <Button
                    type="submit"
                    size="icon"
                    disabled={isLoading || !prompt.trim()}
                    className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                  >
                    {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                  </Button>
                </form>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
