'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';

type Topic = 'services' | 'team' | 'pricing' | 'process';
type Message = { role: 'assistant' | 'user'; text: string };

const topics: { id: Topic; label: string }[] = [
  { id: 'services', label: 'What can Nexora build?' },
  { id: 'team', label: 'Who is on the team?' },
  { id: 'pricing', label: 'Packages & pricing' },
  { id: 'process', label: 'Timeline & process' },
];

const detectLanguage = (text: string) =>
  /\b(kya|kia|kaun|kon|kitna|kitne|hai|hain|hum|kr|kar|bana|banao|batao|btao|kaise|kaisay|chahiye|qeemat|kharcha|lagta|hafta|haftay|shukriya|salam|assalam)\b/i.test(text)
    ? 'ur'
    : 'en';

function getLocalAnswer(question: string) {
  const text = question.toLowerCase();
  const language = detectLanguage(question);
  const romanUrdu = language === 'ur';

  if (/^(hi|hello|hey|salam|assalam|assalamualaikum|good morning|good afternoon)\b/i.test(text)) {
    return romanUrdu
      ? 'Wa alaikum assalam! Main Nexora ka local assistant hoon. Websites, services, pricing ya project ke baare mein pooch sakte hain.'
      : 'Hi! I’m Nexora’s local assistant. Ask me about websites, our services, pricing, or starting a project.';
  }

  if (/\b(thank|thanks|thank you|shukriya|meherbani)\b/i.test(text)) {
    return romanUrdu ? 'Khushi hui madad karke! Aur kuch poochna ho to zaroor batayein.' : 'You’re welcome! Feel free to ask if you need anything else.';
  }

  if (/\b(team|teem|member|staff|developer|who|kaun|kon|humari|hamari)\b/i.test(text)) {
    return romanUrdu
      ? 'Nexora ek web development studio hai. Website par “Made by Cheema developer” ka credit hai; tamam team members ki tafseel publish nahi ki gayi.'
      : 'Nexora is a web development studio. The website credits “Made by Cheema developer”; a full team roster is not published.';
  }

  if (/\b(price|pricing|cost|charge|rate|package|quote|fee|qeemat|kharcha|kitna|kitne|budget)\b/i.test(text)) {
    return romanUrdu
      ? 'Basic package PKR 15K se shuru hota hai (4 pages tak), aur Professional PKR 30K se (8 pages tak). Online stores, custom apps aur advanced features ka quote project ke mutabiq hota hai.'
      : 'Basic starts at PKR 15K (up to 4 pages), and Professional starts at PKR 30K (up to 8 pages). Online stores, custom apps, and advanced features receive a project-specific quote.';
  }

  if (/\b(time|long|timeline|process|duration|week|hafta|haftay|kab tak|kitna arsa|revision|revisions|mobile|responsive)\b/i.test(text)) {
    return romanUrdu
      ? 'Aksar business websites mein taqreeban 1–2 haftay lagte hain; waqt pages aur feedback par depend karta hai. Revisions aur mobile-friendly design shamil hain.'
      : 'Most business websites take around 1–2 weeks, depending on the pages and feedback. Revisions and mobile-friendly design are included.';
  }

  if (/\b(service|website|web app|app|store|shop|landing|build|offer|work|kya|kia|karte|kar sakte|banate|bana sakte)\b/i.test(text)) {
    return romanUrdu
      ? 'Nexora business websites, online stores, landing pages aur custom web apps banata hai. Hum responsive design, contact/WhatsApp features aur SEO setup bhi kar sakte hain.'
      : 'Nexora builds business websites, online stores, landing pages, and custom web apps. Projects can include responsive design, contact/WhatsApp features, and SEO setup.';
  }

  if (/\b(start|begin|hire|contact|whatsapp|talk|baat|rabta|message|call|order|book)\b/i.test(text)) {
    return romanUrdu
      ? 'Project shuru karne ya quote lene ke liye WhatsApp par Nexora team ko message karein.'
      : 'To start a project or request a quote, message the Nexora team on WhatsApp.';
  }

  if (/\b(domain|hosting|seo|search engine|google|content|copywriting|design|ecommerce|e-commerce|online store)\b/i.test(text)) {
    return romanUrdu
      ? 'Nexora websites ke design aur development par kaam karta hai. Hosting, domain, SEO ya content ki availability project requirements par depend karti hai—WhatsApp par team se confirm karein.'
      : 'Nexora works on website design and development. Hosting, domain, SEO, and content availability depend on project requirements—please confirm with the team on WhatsApp.';
  }

  return romanUrdu
    ? 'Main internet ya AI use nahi karta, is liye har naye ya ghair-mutaliq sawal ka jawab nahi bana sakta. Nexora ki services, pricing, team ya website projects ke baare mein pooch sakte hain.'
    : 'I work without internet or AI, so I can’t generate an answer for every new or unrelated question. I can help with common questions about Nexora’s services, pricing, team, and website projects.';
}

export default function NexoraChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      text: 'Hi! I’m Nexora’s local assistant. Ask me about our services, pricing, team, or websites.',
    },
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('keydown', handleEscape);
    inputRef.current?.focus();
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
  }, [messages, isOpen]);

  const ask = (question: string) => {
    setMessages((current) => [
      ...current,
      { role: 'user', text: question },
      { role: 'assistant', text: getLocalAnswer(question) },
    ]);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const question = input.trim();
    if (!question) return;
    setInput('');
    ask(question);
  };

  return (
    <div className="nexora-chat-root" data-nexora-chat>
      {isOpen && (
        <section
          className="nexora-chat-panel"
          role="dialog"
          aria-labelledby="nexora-chat-title"
          aria-modal="false"
        >
          <header className="nexora-chat-header">
            <span className="nexora-chat-avatar" aria-hidden="true">N</span>
            <div className="nexora-chat-heading">
              <h2 id="nexora-chat-title">Nexora assistant</h2>
              <p><span /> Local answers · no API needed</p>
            </div>
            <button
              className="nexora-chat-close"
              type="button"
              aria-label="Close Nexora assistant"
              onClick={() => setIsOpen(false)}
            >
              ×
            </button>
          </header>

          <div className="nexora-chat-messages" aria-live="polite" aria-relevant="additions text">
            {messages.map((message, index) => (
              <p
                className={`nexora-chat-message nexora-chat-message-${message.role}`}
                key={`${index}-${message.role}`}
              >
                {message.text}
              </p>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="nexora-chat-topics" aria-label="Ask about Nexora">
            {topics.map((topic) => (
              <button
                key={topic.id}
                type="button"
                onClick={() => ask(topic.label)}
              >
                {topic.label}
              </button>
            ))}
          </div>

          <a
            className="nexora-chat-whatsapp"
            href="https://wa.me/923298803509?text=Hi%20Nexora%2C%20I%20have%20a%20question%20about%20your%20services."
            target="_blank"
            rel="noreferrer"
          >
            Chat with the team on WhatsApp <span aria-hidden="true">↗</span>
          </a>

          <form className="nexora-chat-form" onSubmit={handleSubmit}>
            <label className="nexora-chat-sr-only" htmlFor="nexora-chat-input">Ask about Nexora</label>
            <input
              id="nexora-chat-input"
              ref={inputRef}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask about Nexora..."
              autoComplete="off"
              maxLength={2000}
              />
              <button type="submit" aria-label="Send message" disabled={!input.trim()}>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 12 20 4l-5 16-3-7-8-1Zm8 1 8-9" />
              </svg>
            </button>
          </form>
        </section>
      )}

      <button
        className={`nexora-chat-launcher${isOpen ? ' is-open' : ''}`}
        type="button"
        aria-label={isOpen ? 'Close Nexora assistant' : 'Open Nexora assistant'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="m6 6 12 12M18 6 6 18" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H5l1.6-3.2A7.5 7.5 0 1 1 20 11.5Z" />
            <path d="M8 11h.01M12 11h.01M16 11h.01" />
          </svg>
        )}
      </button>
    </div>
  );
}
