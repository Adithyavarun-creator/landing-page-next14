"use client"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import React from "react"

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    text: string
    className?: string
}

const HeroAnimation = React.forwardRef<HTMLDivElement, Props>(
    ({ text, className, ...props }, ref) => {

        const item = {
            hidden: {
                y: '200%',
                opacity: 0,
                transition: {
                    ease: [0.455, 0.03, 0.515, 0.955], duration: 0.05
                }
            },
            visible: {
                y: '0',
                opacity: 1,
                transition: {
                    ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75

                }
            }
        }

        const words = text.split(" ").map((word) => {
            const characters = word.split("")
            characters.push("\u00A0")
            return characters
        })

        return (
            <div ref={ref} {...props}>
                {
                    words.map((word, index) => {
                        return (
                            <span className="whitespace-nowrap" style={{ overflow: 'hidden' }} key={index}>
                                {word.map((element, i) => (
                                    <span key={i} style={{ overflow: 'hidden', display: 'inline-block' }}>
                                        <motion.span
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            variants={item}
                                            className={cn("hello", className)}
                                            style={{ display: 'inline-block' }}>
                                            {element}
                                        </motion.span>
                                    </span>
                                ))}
                            </span>
                        )
                    })
                }
            </div>
        )
    }
)

export default HeroAnimation