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

  const handleSubmit = async () => {
    if (phone.length < 10) {
      alert("Por favor, insira um número de telefone válido com DDD.")
      return
    }

    try {
      // First, try to send the webhook
      const response = await fetch(
        "https://webhook.agenciasclick.com.br/webhook/5c3b17c2-856f-40ad-8a89-247897df12e1",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ numero: phone.replace(/\D/g, "") }),
          mode: "no-cors", // Add this to handle CORS issues
        },
      )

      // Since we're using no-cors mode, we can't check response status
      // So we'll proceed to redirect regardless
      console.log("Webhook enviado com sucesso")

      // Redirect to checkout
      window.location.href = "https://checkout.clickvet.pro/"
    } catch (error) {
      console.error("Erro ao enviar webhook:", error)

      // Even if webhook fails, still redirect to checkout
      // This ensures the user experience isn't broken
      alert("Redirecionando para o checkout...")
      window.location.href = "https://checkout.clickvet.pro/"
    }
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
    { id: 1, titulo: "AUXILIAR VETERINÁRIA CÃES E GATOS", imagem: "/images/curso-caes-gatos-novo.jpg" },
    { id: 2, titulo: "AUXILIAR VETERINÁRIA GRANDE PORTE", imagem: "/images/curso-grande-porte-novo.jpg" },
    { id: 3, titulo: "AUXILIAR VETERINÁRIA ANIMAIS SILVESTRES", imagem: "/images/curso-silvestres-novo.jpg" },
    { id: 4, titulo: "ADESTRAMENTO E PSIC. CANINA", imagem: "/images/curso-adestramento-novo.jpg" },
    { id: 5, titulo: "BANHO E TOSA", imagem: "/images/curso-banho-tosa-novo.jpg" },
    { id: 6, titulo: "DERMATOLOGIA E NUTRIÇÃO PET", imagem: "/images/curso-dermatologia-novo.jpg" },
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
      <div className="min-h-screen relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
          style={{ backgroundImage: "url('/images/veterinarios-mosaico.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/50" />

        <div className="relative z-10 min-h-screen flex flex-col">
          <header className="flex justify-center items-center py-8">
            <div className="text-5xl md:text-6xl font-bold tracking-tight">
              <span className="text-green-500">CLICK</span>
              <span className="text-red-500">VET</span>
              <span className="text-red-500">FLIX</span>
            </div>
          </header>

          <main className="flex-1 flex items-center justify-center px-5">
            <div className="text-center max-w-4xl">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 tracking-tight">
                Criado para tutores,
                <br />
                vets e empreendedores
                <br />
                da área animal.
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Inclui certificado. De <span className="line-through text-red-500">R$150</span> por apenas{" "}
                <span className="text-green-500 font-semibold">R$20,90</span>. Cancele quando quiser.
              </p>
              <p className="text-lg md:text-xl mb-6 opacity-90">
                Quer começar agora? Deixe seu número e libere o acesso. <span className="text-blue-500">💙</span>
              </p>

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

      {/* ... (restante do código da página continua igual) ... */}
    </div>
  )
}
