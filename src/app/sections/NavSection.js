// sections/NavSection.js
'use client'

import { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'
import DarkModeSwitch from '../components/DarkModeSwitch'

// ─── Reusable nav link ────────────────────────────────────────────────────────
const NavLink = ({ href, label, onClick }) => (
    <a
        href={href}
        onClick={onClick}
        className="text-sm font-medium text-foreground transition-colors duration-200 hover:text-primary"
    >
        {label}
    </a>
)

// ─── Nav items config ─────────────────────────────────────────────────────────
const NAV_LINKS = [
    { href: '#', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#gamedev', label: 'Game Dev' },
    { href: '#about', label: 'About' },
    { href: '#focus', label: 'Focus' },
    { href: '#contact', label: 'Contact' },
]

// ─── Resume Modal (native — no HeroUI dependency) ─────────────────────────────
const ResumeModal = ({ isOpen, onClose }) => {
    // Close on Escape key
    useEffect(() => {
        if (!isOpen) return
        const handleKey = (e) => {
            if (e.key === 'Escape') onClose()
        }
        document.addEventListener('keydown', handleKey)
        return () => document.removeEventListener('keydown', handleKey)
    }, [isOpen, onClose])

    // Lock body scroll while open
    useEffect(() => {
        document.body.style.overflow = isOpen ? 'hidden' : ''
        return () => {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    if (!isOpen) return null

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            onClick={onClose}
        >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            {/* Dialog */}
            <div
                className="relative z-10 w-full max-w-5xl overflow-hidden rounded-xl bg-background shadow-2xl"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 z-20 cursor-pointer rounded-md p-1.5 text-foreground transition-colors hover:bg-secondary"
                    aria-label="Close"
                >
                    <X size={18} />
                </button>

                <iframe
                    src="/resume.pdf"
                    className="h-[calc(100vh-8rem)] w-full"
                    title="Resume"
                />
            </div>
        </div>
    )
}

// ─── Main component ───────────────────────────────────────────────────────────
const NavSection = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(() => {
        if (typeof window === 'undefined') return true
        console.log(
            'mode is',
            window.matchMedia('(prefers-color-scheme: dark)').matches
        )
        const stored = localStorage.getItem('darkMode')
        if (stored !== null) return JSON.parse(stored)
        return window.matchMedia('(prefers-color-scheme: dark)').matches
    })

    const navRef = useRef(null)

    // Close mobile menu on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (navRef.current && !navRef.current.contains(e.target)) {
                setIsMenuOpen(false)
            }
        }
        if (isMenuOpen)
            document.addEventListener('mousedown', handleClickOutside)
        return () =>
            document.removeEventListener('mousedown', handleClickOutside)
    }, [isMenuOpen])

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isModalOpen) return // modal handles its own scroll lock
        document.body.style.overflow = isMenuOpen ? 'hidden' : ''
        return () => {
            document.body.style.overflow = ''
        }
    }, [isMenuOpen, isModalOpen])

    const closeMenu = () => setIsMenuOpen(false)

    return (
        <>
            {/* ── Navbar ── */}
            <nav
                ref={navRef}
                className="fixed top-0 right-0 left-0 z-50 max-w-screen border-b border-accent/20 bg-background/80 backdrop-blur-md transition-colors duration-300"
            >
                <div className="mx-auto flex h-16 w-full items-center justify-between px-6">
                    {/* Brand */}
                    <span className="text-xl font-bold tracking-wide text-foreground select-none">
                        CV
                    </span>

                    {/* Desktop links — hidden below 950px */}
                    <div className="hidden items-center gap-6 nav:flex">
                        {NAV_LINKS.map((link) => (
                            <NavLink key={link.href} {...link} />
                        ))}

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="cursor-pointer text-sm font-medium text-foreground transition-colors duration-200 hover:text-primary"
                        >
                            Resume
                        </button>

                        <DarkModeSwitch
                            isDarkMode={isDarkMode}
                            setIsDarkMode={setIsDarkMode}
                        />
                    </div>

                    {/* Mobile toggle — visible below 950px */}
                    <button
                        className="cursor-pointer rounded-md p-2 text-foreground transition-colors duration-200 hover:bg-secondary-hover nav:hidden"
                        onClick={() => setIsMenuOpen((prev) => !prev)}
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>

                {/* Mobile menu drawer */}
                {isMenuOpen && (
                    <div className="flex flex-col gap-4 border-t border-accent/20 bg-background px-6 py-4 nav:hidden">
                        {NAV_LINKS.map((link) => (
                            <NavLink
                                key={link.href}
                                {...link}
                                onClick={closeMenu}
                            />
                        ))}

                        <button
                            onClick={() => {
                                setIsModalOpen(true)
                                closeMenu()
                            }}
                            className="cursor-pointer text-left text-sm font-medium text-foreground transition-colors duration-200 hover:text-primary"
                        >
                            Resume
                        </button>

                        <div className="pt-1">
                            <DarkModeSwitch
                                isDarkMode={isDarkMode}
                                setIsDarkMode={setIsDarkMode}
                            />
                        </div>
                    </div>
                )}
            </nav>

            {/* Spacer so page content sits below the fixed navbar */}
            <div className="h-16" />

            {/* ── Resume Modal ── */}
            <ResumeModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    )
}

export default NavSection
