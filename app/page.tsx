"use client"

import type React from "react"
import { useState, useRef } from "react"

export default function ClickVetFlixLanding() {
  const [phone, setPhone] = useState("")
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [showArrows, setShowArrows] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "")
    if (value.length <= 11) {
      setPhone(value)
    }
  }

  const handleSubmit = () => {
    if (phone.length < 10) {
      alert("Por favor, insira um número de telefone válido com DDD.")
      return
    }
    alert(`Obrigado! Entraremos em contato através do número: ${phone}`)
  }

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      })
    }
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const cursos = [
    {
      id: 1,
      titulo: "AUXILIAR VETERINÁRIA CÃES E GATOS",
      imagem: "/images/curso-caes-gatos-novo.jpg",
    },
    {
      id: 2,
      titulo: "AUXILIAR VETERINÁRIA GRANDE PORTE",
      imagem: "/images/curso-grande-porte-novo.jpg",
    },
    {
      id: 3,
      titulo: "AUXILIAR VETERINÁRIA ANIMAIS SILVESTRES",
      imagem: "/images/curso-silvestres-novo.jpg",
    },
    {
      id: 4,
      titulo: "ADESTRAMENTO E PSIC. CANINA",
      imagem: "/images/curso-adestramento-novo.jpg",
    },
    {
      id: 5,
      titulo: "BANHO E TOSA",
      imagem: "/images/curso-banho-tosa-novo.jpg",
    },
    {
      id: 6,
      titulo: "DERMATOLOGIA E NUTRIÇÃO PET",
      imagem: "/images/curso-dermatologia-novo.jpg",
    },
  ]

  const faqs = [
    {
      pergunta: "O que é o ClickVetFlix?",
      resposta:
        "O ClickVetFlix é uma plataforma de ensino online especializada em cursos para a área veterinária. Oferecemos treinamentos para tutores, veterinários e empreendedores do setor animal, com certificados reconhecidos e conteúdo de alta qualidade.",
    },
    {
      pergunta: "Quanto custa o ClickVetFlix?",
      resposta:
        "Nossa assinatura custa apenas R$ 20,90 por mês, com acesso ilimitado a todos os cursos da plataforma. Você pode cancelar quando quiser, sem multas ou taxas adicionais.",
    },
    {
      pergunta: "Onde posso assistir os cursos?",
      resposta:
        "Você pode assistir nossos cursos em qualquer dispositivo com acesso à internet: computador, tablet, smartphone ou smart TV. Nossa plataforma é responsiva e funciona perfeitamente em todos os dispositivos.",
    },
    {
      pergunta: "Como faço para cancelar?",
      resposta:
        "O cancelamento é simples e pode ser feito a qualquer momento através da sua conta na plataforma. Não há multas, taxas de cancelamento ou burocracias. Você mantém acesso até o final do período já pago.",
    },
    {
      pergunta: "Que cursos posso fazer no ClickVetFlix?",
      resposta:
        "Oferecemos diversos cursos como Auxiliar Veterinária para Cães e Gatos, Grande Porte, Animais Silvestres, Adestramento e Psicologia Canina, Banho e Tosa, Dermatologia e Nutrição Pet, entre outros. Todos com certificado incluso.",
    },
    {
      pergunta: "Os certificados são reconhecidos?",
      resposta:
        "Sim! Todos os nossos cursos oferecem certificados de conclusão reconhecidos no mercado. Além disso, fornecemos carta de recomendação para estágios, ajudando você a ingressar na área veterinária.",
    },
  ]

  return (
    <div className="bg-black text-white">
      {/* Hero Section - Mantido exatamente como estava */}
      <div className="min-h-screen relative overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{
            backgroundImage: "url('/images/veterinarios-mosaico.png')",
          }}
        />

        {/* Overlay com gradiente mais intenso */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/50" />

        {/* Content */}
        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Header */}
          <header className="flex justify-center items-center py-8">
            <div className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="text-green-500">CLICK</span>
              <span className="text-red-500">VET</span>
              <span className="text-red-500">FLIX</span>
            </div>
          </header>

          {/* Main Content - Centralizado */}
          <main className="flex-1 flex items-center justify-center px-5">
            <div className="text-center max-w-4xl">
              {/* Hero Title */}
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight">
                Criado para tutores,
                <br />
                vets e empreendedores
                <br />
                da área animal.
              </h1>

              {/* Pricing Info */}
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Inclui certificado. De <span className="line-through text-red-500">R$150</span> por apenas{" "}
                <span className="text-green-500 font-semibold">R$20,90</span>. Cancele quando quiser.
              </p>

              {/* CTA Text */}
              <p className="text-lg md:text-xl mb-6 opacity-90">
                Quer começar agora? Deixe seu número e libere o acesso. <span className="text-blue-500">💙</span>
              </p>

              {/* Form - Centralizado */}
              <div className="flex flex-col sm:flex-row gap-3 items-center justify-center max-w-lg mx-auto">
                <input
                  type="tel"
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="Whatsapp com DDD"
                  className="bg-white/10 border border-white/20 text-white px-6 py-4 rounded-md text-lg w-full sm:flex-1 backdrop-blur-sm placeholder:text-white/60 focus:outline-none focus:border-green-500 focus:bg-white/15"
                  maxLength={11}
                />
                <button
                  onClick={handleSubmit}
                  className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-md font-semibold text-lg transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  Vamos lá
                  <span>→</span>
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Nova Seção - Cursos */}
      <div className="px-4 md:px-12 py-8">
        {/* Banner Promocional */}
        <div className="bg-gradient-to-r from-purple-900 to-purple-700 rounded-lg p-6 mb-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="text-4xl">🎓</div>
            <div>
              <h3 className="text-xl font-bold mb-1">O ClickVetFlix que você adora por apenas R$ 20,90.</h3>
              <p className="text-purple-200">Aproveite nossa opção mais acessível, cursos com certificados.</p>
            </div>
          </div>
        </div>

        {/* Seção Em Alta */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Em alta</h2>

          {/* Container do Carrossel */}
          <div
            className="relative group"
            onMouseEnter={() => setShowArrows(true)}
            onMouseLeave={() => setShowArrows(false)}
          >
            {/* Seta Esquerda */}
            <button
              onClick={scrollLeft}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 ${
                showArrows ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Seta Direita */}
            <button
              onClick={scrollRight}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-300 ${
                showArrows ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
              }`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Cards dos Cursos */}
            <div ref={scrollContainerRef} className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide scroll-smooth">
              {cursos.map((curso) => (
                <div
                  key={curso.id}
                  className="relative min-w-[280px] h-[400px] rounded-lg overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300 flex-shrink-0"
                >
                  {/* Imagem de Fundo */}
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                      backgroundImage: `url('${curso.imagem}')`,
                    }}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Logo Netflix no canto */}
                  <div className="absolute top-4 left-4">
                    <span className="text-red-500 font-bold text-xl">CV</span>
                  </div>

                  {/* Número Grande */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="text-8xl font-black text-white/20 leading-none mb-2">{curso.id}</div>
                    <h3 className="text-white font-bold text-lg leading-tight">{curso.titulo}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Seção FAQ */}
      <div className="px-4 md:px-12 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Perguntas frequentes</h2>

        <div className="max-w-4xl mx-auto space-y-2">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-gray-800 rounded-sm overflow-hidden">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-6 text-left flex justify-between items-center hover:bg-gray-700 transition-colors"
              >
                <span className="text-lg font-medium">{faq.pergunta}</span>
                <svg
                  className={`w-6 h-6 transition-transform duration-200 ${openFaq === index ? "rotate-45" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>

              {openFaq === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed">{faq.resposta}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Rodapé */}
      <footer className="bg-gray-900 py-8 px-4 md:px-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-4">
            <div className="text-2xl font-bold mb-2">
              <span className="text-green-500">CLICK</span>
              <span className="text-red-500">VET</span>
              <span className="text-red-500">FLIX</span>
            </div>
          </div>

          <div className="text-gray-400 text-sm space-y-2">
            <p>© 2025 Agências Click Treinamentos LTDA. Todos os direitos reservados.</p>
            <p>
              Siga-nos no Instagram:{" "}
              <a
                href="https://instagram.com/clickvet.pro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                @clickvet.pro
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
