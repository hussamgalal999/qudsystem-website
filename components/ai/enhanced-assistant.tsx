"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Bot, X, Send, Loader2, ImageIcon, Sparkles } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { generateAIResponse, generateResponseWithImage } from "@/utils/ai-service"
import { useLanguage } from "@/hooks/use-language"

type Message = {
  role: "user" | "assistant"
  content: string
}

export default function EnhancedAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "👋 Hi there! I'm Qudy, QudSystem's AI assistant. How can I help you today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [imageFile, setImageFile] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  const { language, t } = useLanguage()

  // Scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  const handleSendMessage = async () => {
    if (!input.trim() && !imageFile) return

    // Add user message
    const userMessage: Message = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // Prepare conversation history for context
      const chatHistory = messages.map((msg) => `${msg.role === "user" ? "User" : "Qudy"}: ${msg.content}`).slice(-6) // Only use the last 6 messages for context

      let result

      // If there's an image, use the image-based generation
      if (imageFile && imagePreview) {
        result = await generateResponseWithImage(
          input,
          imagePreview,
          chatHistory,
          language, // Pass current language
        )
        // Clear the image after sending
        setImageFile(null)
        setImagePreview(null)
      } else {
        // Otherwise use text-only generation
        result = await generateAIResponse(
          input,
          chatHistory,
          language, // Pass current language
        )
      }

      if (result.success) {
        // Add AI response
        const assistantMessage: Message = { role: "assistant", content: result.data || "I apologize, but I couldn't generate a response." }
        setMessages((prev) => [...prev, assistantMessage])
      } else {
        // Add error message with more specific handling
        let errorContent = result.error || t("chatbot.error")
        
        // Provide more user-friendly error messages
        if (result.error?.includes("quota exceeded")) {
          errorContent = "I'm currently experiencing high demand. Please try again in a few moments, or contact our support team for immediate assistance."
        } else if (result.error?.includes("rate limit")) {
          errorContent = "I'm processing many requests right now. Please wait a moment and try again."
        }
        
        const errorMessage: Message = {
          role: "assistant",
          content: errorContent,
        }
        setMessages((prev) => [...prev, errorMessage])
      }
    } catch (error) {
      console.error("Error generating response:", error)
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I'm sorry, I'm experiencing technical difficulties. Please try again later or contact our support team.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setImageFile(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setImagePreview(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleRemoveImage = () => {
    setImageFile(null)
    setImagePreview(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  // Suggested questions for quick access
  const suggestedQuestions = [
    "What services does QudSystem offer?",
    "Can you help me with a 3D website project?",
    "What technologies do you work with?",
    "How can I start a new project?",
  ]

  return (
    <>
      {/* Chat toggle button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X size={24} /> : <Bot size={24} />}
      </motion.button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[90vw] sm:w-[400px] h-[600px] max-h-[80vh] rounded-2xl overflow-hidden shadow-2xl border border-neutral-200/50 dark:border-neutral-800/50 flex flex-col"
          >
            {/* Chat header */}
            <div className="p-4 backdrop-blur-xl bg-gradient-to-r from-blue-600/90 to-purple-600/90 dark:from-blue-600/90 dark:to-purple-600/90 text-white border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-white/20 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold">Qudy</h3>
                  <p className="text-xs text-white/80">QudSystem AI Assistant</p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="h-8 w-8 rounded-full text-white hover:bg-white/20"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Chat messages */}
            <div className="flex-1 overflow-y-auto p-4 backdrop-blur-md bg-white/90 dark:bg-neutral-900/90 space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-2xl p-3 ${
                      message.role === "user"
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white ml-4"
                        : "backdrop-blur-sm bg-neutral-200/70 dark:bg-neutral-800/70 mr-4"
                    }`}
                  >
                    {message.role === "assistant" && (
                      <div className="flex items-center gap-2 mb-1">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Qudy" />
                          <AvatarFallback className="bg-blue-600 text-white text-xs">QS</AvatarFallback>
                        </Avatar>
                        <span className="text-xs font-medium">Qudy</span>
                      </div>
                    )}
                    <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-[80%] rounded-2xl p-3 backdrop-blur-sm bg-neutral-200/70 dark:bg-neutral-800/70 mr-4">
                    <div className="flex items-center gap-2 mb-1">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Qudy" />
                        <AvatarFallback className="bg-blue-600 text-white text-xs">QS</AvatarFallback>
                      </Avatar>
                      <span className="text-xs font-medium">Qudy</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span className="text-sm">{t("chatbot.thinking")}</span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Image preview */}
            {imagePreview && (
              <div className="p-2 backdrop-blur-xl bg-white/80 dark:bg-neutral-900/80 border-t border-neutral-200/50 dark:border-neutral-800/50">
                <div className="relative rounded-lg overflow-hidden">
                  <img src={imagePreview || "/placeholder.svg"} alt="Preview" className="w-full h-32 object-cover" />
                  <Button
                    variant="destructive"
                    size="icon"
                    className="absolute top-1 right-1 h-6 w-6 rounded-full"
                    onClick={handleRemoveImage}
                  >
                    <X className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            )}

            {/* Suggested questions */}
            {messages.length <= 2 && (
              <div className="p-3 backdrop-blur-xl bg-white/80 dark:bg-neutral-900/80 border-t border-neutral-200/50 dark:border-neutral-800/50">
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-2">{t("chatbot.suggestedQuestions")}</p>
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.map((question, index) => (
                    <button
                      key={index}
                      className="text-xs py-1.5 px-3 rounded-full backdrop-blur-sm bg-neutral-200/70 dark:bg-neutral-800/70 hover:bg-neutral-300/70 dark:hover:bg-neutral-700/70 transition-colors"
                      onClick={() => {
                        setInput(question)
                      }}
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Chat input */}
            <div className="p-4 backdrop-blur-xl bg-white/90 dark:bg-neutral-900/90 border-t border-neutral-200/50 dark:border-neutral-800/50">
              <div className="flex flex-col gap-2">
                <div className="flex items-end gap-2">
                  <Textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={t("chatbot.placeholder")}
                    className="min-h-[60px] max-h-[120px] resize-none backdrop-blur-sm bg-white/70 dark:bg-neutral-800/70 border-neutral-200/70 dark:border-neutral-700/70"
                  />
                  <div className="flex flex-col gap-2">
                    <Button
                      type="button"
                      size="icon"
                      variant="outline"
                      className="h-10 w-10 rounded-full"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <ImageIcon className="h-4 w-4" />
                      <span className="sr-only">Attach image</span>
                    </Button>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <Button
                      onClick={handleSendMessage}
                      disabled={(!input.trim() && !imageFile) || isLoading}
                      className="h-10 w-10 rounded-full p-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center">Powered by QudMind AI</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
