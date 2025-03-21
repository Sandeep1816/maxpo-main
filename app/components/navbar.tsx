"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white/90 text-black shadow-md backdrop-blur-md" : "bg-transparent text-white"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-10 w-32">
            <Image src="/placeholder.svg?height=80&width=240" alt="Maxpo Logo" fill className="object-contain" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium">
              About <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/about" className="w-full">
                  Our Story
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/team" className="w-full">
                  Our Team
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/leadership" className="w-full">
                  Leadership
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium">
              Events <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/upcoming-events" className="w-full">
                  Upcoming Events
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/past-events" className="w-full">
                  Past Events
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/testimonials" className="w-full">
                  Testimonials
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/services" className="text-sm font-medium">
            Services
          </Link>

          <Link href="/careers" className="text-sm font-medium">
            Careers
          </Link>

          <Link href="/contact" className="text-sm font-medium">
            Contact
          </Link>

          <Link href="/blog" className="text-sm font-medium">
            Blog
          </Link>
        </nav>

        <div className="hidden md:block">
          <Button
            variant={isScrolled ? "default" : "outline"}
            className={
              isScrolled
                ? "rounded-full bg-black text-white hover:bg-gray-800"
                : "rounded-full border-white text-white hover:bg-white hover:text-black"
            }
          >
            Get in Touch
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute left-0 top-20 z-50 w-full bg-white px-4 py-6 shadow-lg md:hidden">
          <nav className="flex flex-col gap-4">
            <div className="border-b pb-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">About</span>
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="mt-2 flex flex-col gap-2 pl-4">
                <Link href="/about" className="text-sm text-gray-600">
                  Our Story
                </Link>
                <Link href="/team" className="text-sm text-gray-600">
                  Our Team
                </Link>
                <Link href="/leadership" className="text-sm text-gray-600">
                  Leadership
                </Link>
              </div>
            </div>

            <div className="border-b pb-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Events</span>
                <ChevronDown className="h-4 w-4" />
              </div>
              <div className="mt-2 flex flex-col gap-2 pl-4">
                <Link href="/upcoming-events" className="text-sm text-gray-600">
                  Upcoming Events
                </Link>
                <Link href="/past-events" className="text-sm text-gray-600">
                  Past Events
                </Link>
                <Link href="/testimonials" className="text-sm text-gray-600">
                  Testimonials
                </Link>
              </div>
            </div>

            <Link href="/services" className="border-b pb-2 text-sm font-medium">
              Services
            </Link>

            <Link href="/careers" className="border-b pb-2 text-sm font-medium">
              Careers
            </Link>

            <Link href="/contact" className="border-b pb-2 text-sm font-medium">
              Contact
            </Link>

            <Link href="/blog" className="border-b pb-2 text-sm font-medium">
              Blog
            </Link>

            <Button className="mt-4 w-full rounded-full bg-black text-white">Get in Touch</Button>
          </nav>
        </div>
      )}
    </header>
  )
}

