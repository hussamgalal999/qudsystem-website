"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { MessageSquare, X, Send, Loader2, Bot } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { generateText } from "ai"
import { openai } from "@ai-sdk/openai"

type Message = {
  role: "user" | "assistant" | "system"
  content: string
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "👋 Hi there! I'm Qudy, QudSystem's AI assistant. How can I help you today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)

  // Scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [messages])

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus()
      }, 300)
    }
  }, [isOpen])

  const handleSendMessage = async () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = { role: "user", content: input }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // Prepare conversation history for the AI
      const conversationHistory = messages
        .filter((msg) => msg.role !== "system")
        .map((msg) => `${msg.role === "user" ? "User" : "Qudy"}: ${msg.content}`)
        .join("\n")

      // System prompt to guide the AI
      const systemPrompt = `
        You are Qudy, the AI assistant for QudSystem, a leading software development company.
        
        About QudSystem:
        - QudSystem is a trusted technology partner for established companies, startups, and individual clients
        - They specialize in web development, mobile apps, enterprise solutions, and custom software
        - They have expertise in various technologies including React, Next.js, Node.js, and more
        
        Your role is to:
        1. Provide helpful information about QudSystem's services and expertise
        2. Guide users through initiating new projects
        3. Help with project improvements or updates
        4. Assist in starting projects from scratch
        5. Help users select the appropriate project type based on their needs
        6. Gather necessary information to facilitate project requests
        
        Be friendly, professional, and helpful. Ask clarifying questions when needed.
        Keep responses concise and focused on helping the user with their specific needs.
        
        Previous conversation:
        ${conversationHistory}
      `

      // Generate AI response
      const { text } = await generateText({
        model: openai("gpt-4o"),
        prompt: input,
        system: systemPrompt,
      })

      // Add AI response
      const assistantMessage: Message = { role: "assistant", content: text }
      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error("Error generating response:", error)
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "I'm sorry, I encountered an error. Please try again later.",
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

  // Suggested questions for quick access
  const suggestedQuestions = [
    "What services does QudSystem offer?",
    "How can I start a new project?",
    "What technologies do you work with?",
    "Can you help improve my existing project?",
  ]

  return (
    <>
      {/* Chat toggle button */}
      <motion.button
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-r from-neutral-800 to-neutral-900 dark:from-neutral-200 dark:to-white text-white dark:text-neutral-900 shadow-lg hover:shadow-xl transition-all duration-300"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
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
            <div className="p-4 backdrop-blur-xl bg-white/80 dark:bg-neutral-900/80 border-b border-neutral-200/50 dark:border-neutral-800/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-800 flex items-center justify-center">
                  <Bot className="h-6 w-6 text-neutral-700 dark:text-neutral-300" />
                </div>
                <div>
                  <h3 className="font-semibold">Qudy</h3>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">QudSystem AI Assistant</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="h-8 w-8 rounded-full">
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Chat messages */}
            <div className="flex-1 overflow-y-auto p-4 backdrop-blur-md bg-white/50 dark:bg-neutral-900/50 space-y-4">
              {messages.map((message, index) => (
                <div key={index} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] rounded-2xl p-3 ${
                      message.role === "user"
                        ? "bg-primary text-primary-foreground ml-4"
                        : "backdrop-blur-sm bg-neutral-200/70 dark:bg-neutral-800/70 mr-4"
                    }`}
                  >
                    {message.role === "assistant" && (
                      <div className="flex items-center gap-2 mb-1">
                        <div className="relative h-6 w-6 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-700 flex items-center justify-center">
                          <Bot className="h-4 w-4 text-neutral-700 dark:text-neutral-300" />
                        </div>
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
                      <div className="relative h-6 w-6 overflow-hidden rounded-full bg-neutral-100 dark:bg-neutral-700 flex items-center justify-center">
                        <Bot className="h-4 w-4 text-neutral-700 dark:text-neutral-300" />
                      </div>
                      <span className="text-xs font-medium">Qudy</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span className="text-sm">Thinking...</span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested questions */}
            {messages.length <= 2 && (
              <div className="p-3 backdrop-blur-xl bg-white/70 dark:bg-neutral-900/70 border-t border-neutral-200/50 dark:border-neutral-800/50">
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-2">Suggested questions:</p>
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.map((question, index) => (
                    <button
                      key={index}
                      className="text-xs py-1.5 px-3 rounded-full backdrop-blur-sm bg-neutral-200/70 dark:bg-neutral-800/70 hover:bg-neutral-300/70 dark:hover:bg-neutral-700/70 transition-colors"
                      onClick={() => {
                        setInput(question)
                        if (inputRef.current) {
                          inputRef.current.focus()
                        }
                      }}
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Chat input */}
            <div className="p-4 backdrop-blur-xl bg-white/80 dark:bg-neutral-900/80 border-t border-neutral-200/50 dark:border-neutral-800/50">
              <div className="flex items-end gap-2">
                <Textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  className="min-h-[60px] max-h-[120px] resize-none backdrop-blur-sm bg-white/70 dark:bg-neutral-800/70 border-neutral-200/70 dark:border-neutral-700/70"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!input.trim() || isLoading}
                  className="h-10 w-10 rounded-full p-0 bg-gradient-to-r from-neutral-800 to-neutral-900 dark:from-neutral-200 dark:to-white text-white dark:text-neutral-900"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
