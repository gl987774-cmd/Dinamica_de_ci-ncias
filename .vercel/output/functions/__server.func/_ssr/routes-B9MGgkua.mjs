import { r as __toESM } from "../_runtime.mjs";
import { a as Trigger2, c as require_react, i as Root2, n as Header, r as Item, s as require_jsx_runtime, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { a as Play, c as ChevronDown, i as ShieldCheck, l as Check, n as Star, o as Pause, r as ShoppingCart, s as Lock, t as Zap, u as ArrowRight } from "../_libs/lucide-react.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B9MGgkua.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function TopBanner() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-wrap items-center justify-center gap-x-4 gap-y-1 px-4 py-2.5 text-center",
		style: { backgroundColor: "#F72B2A" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "text-xs font-bold text-white sm:text-sm",
			children: ["Oferta especial — apenas hoje ", (/* @__PURE__ */ new Date()).toLocaleDateString("pt-BR")]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "rounded-full bg-background px-3 py-0.5 text-xs font-bold sm:text-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-green-600",
					children: "✓"
				}),
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-black",
					children: "100% Alinhado à BNCC"
				})
			]
		})]
	});
}
var HERO_VIDEO_URL = "/videos/meu-video-final.mp4";
var trust = [
	{
		icon: Zap,
		label: "Acesso imediato"
	},
	{
		icon: Lock,
		label: "Pagamento seguro"
	},
	{
		icon: ShieldCheck,
		label: "7 dias de garantia — ou seu dinheiro de volta"
	}
];
var stats$1 = [
	{
		value: "500+",
		label: "Recursos"
	},
	{
		value: "12k+",
		label: "Professores"
	},
	{
		value: "4,9★",
		label: "Avaliação"
	}
];
function scrollToPricing$3() {
	document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
}
function HeroSection() {
	const videoRef = (0, import_react.useRef)(null);
	const [isPlaying, setIsPlaying] = (0, import_react.useState)(false);
	function toggleVideoPlayback() {
		const video = videoRef.current;
		if (!video) return;
		if (video.paused) {
			video.volume = 1;
			video.play();
			setIsPlaying(true);
		} else {
			video.pause();
			setIsPlaying(false);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-background px-4 pb-12 pt-10 sm:pt-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container mx-auto max-w-4xl text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "mx-auto max-w-3xl text-4xl font-extrabold leading-tight text-foreground sm:text-5xl md:text-6xl",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: {
								background: "linear-gradient(135deg, #006904, #1f8b2f)",
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent"
							},
							children: "Pare de perder"
						}),
						" ",
						"seu",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							style: {
								background: "linear-gradient(135deg, #006904, #1f8b2f)",
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent"
							},
							children: "fim de semana"
						}),
						" ",
						"planejando aula de Ciências"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-6 max-w-2xl text-base font-bold text-muted-foreground sm:text-lg",
					children: "Mais de 500 dinâmicas prontas para o Fundamental ao Médio — é só abrir, imprimir (ou projetar) e aplicar. Sem passar horas montando do zero."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto mt-10 w-full max-w-[300px] rounded-[2rem] border-8 border-foreground/90 bg-foreground/90 shadow-2xl",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
						ref: videoRef,
						src: HERO_VIDEO_URL,
						poster: "/videos/meu-video-poster.jpg",
						playsInline: true,
						preload: "none",
						controls: false,
						className: "aspect-[9/16] w-full rounded-[1.6rem] bg-black object-cover",
						onEnded: () => setIsPlaying(false),
						onPause: () => setIsPlaying(false),
						onPlay: () => setIsPlaying(true)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: toggleVideoPlayback,
						"aria-label": isPlaying ? "Pausar vídeo" : "Reproduzir vídeo",
						className: "absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-[#006904] shadow-lg transition hover:scale-105",
						children: isPlaying ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "h-7 w-7" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "ml-1 h-7 w-7" })
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: scrollToPricing$3,
					className: "mt-8 inline-flex w-full max-w-md items-center justify-center gap-2 rounded-2xl px-8 py-5 font-heading text-lg font-bold uppercase tracking-wide text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl",
					style: { background: "linear-gradient(135deg, #006904 0%, #1f8b2f 100%)" },
					children: ["Quero recuperar meu tempo", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-5 w-5" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-muted-foreground sm:text-sm",
					children: trust.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center gap-1.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(t.icon, { className: "h-4 w-4 text-primary" }), t.label]
					}, t.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-10 font-heading text-lg font-bold text-foreground",
					children: "Zero tempo de preparo"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: "500+ dinâmicas testadas em sala, prontas pra usar"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto mt-8 grid max-w-2xl grid-cols-3 gap-4",
					children: stats$1.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-4 shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-heading text-2xl font-extrabold text-primary",
							children: s.value
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: s.label
						})]
					}, s.label))
				})
			]
		})
	});
}
var pains = [
	{
		icon: "⏰",
		title: "O fim de semana vira trabalho",
		desc: "Você monta atividades do zero toda semana, rouba tempo da família e ainda não dá conta de tudo."
	},
	{
		icon: "😴",
		title: "Alunos desmotivados",
		desc: "A turma não engaja com a aula expositiva tradicional e o celular vence a atenção a cada minuto."
	},
	{
		icon: "📋",
		title: "Cobrança da BNCC",
		desc: "Cada nova competência exige adaptar materiais e provar alinhamento — uma carga extra silenciosa."
	}
];
function scrollToPricing$2() {
	document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
}
function PainSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-secondary/60 px-4 py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container mx-auto max-w-4xl text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-bold uppercase tracking-wide text-primary",
					children: "Você já passou por isso?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-3xl font-bold text-foreground md:text-4xl",
					children: "Seu domingo à noite também vira sessão de planejamento?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-5 sm:grid-cols-3",
					children: pains.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-6 text-left shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-3xl",
								children: p.icon
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-3 font-heading text-base font-bold text-foreground",
								children: p.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: p.desc
							})
						]
					}, p.title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: scrollToPricing$2,
					className: "mt-10 inline-flex items-center justify-center rounded-2xl px-8 py-4 font-heading font-bold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl",
					style: { background: "linear-gradient(135deg, #006904 0%, #1f8b2f 100%)" },
					children: "Quero recuperar meu tempo"
				})
			]
		})
	});
}
var benefits = [
	{
		icon: "🎯",
		title: "Engajamento real",
		desc: "Atividades que prendem a atenção e transformam o conteúdo em experiência viva."
	},
	{
		icon: "🧪",
		title: "Ciências prática",
		desc: "Experimentos, atividades e jogos que tornam fácil o que antes era abstrato."
	},
	{
		icon: "👥",
		title: "Em grupo ou individual",
		desc: "Atividades pensadas para diferentes tamanhos de turma e níveis de habilidade."
	},
	{
		icon: "📚",
		title: "100% BNCC",
		desc: "Cada atividade vem com a competência e habilidade da BNCC já mapeadas."
	},
	{
		icon: "🖨️",
		title: "Pronto para imprimir",
		desc: "PDFs editáveis, em alta qualidade, prontos para a fotocopiadora ou para o projetor."
	},
	{
		icon: "♾️",
		title: "Atualizações vitalícias",
		desc: "Receba todas as novas atividades que adicionarmos, sem pagar nada a mais. Para sempre."
	}
];
function BenefitsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-background px-4 py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container mx-auto max-w-5xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-sm font-bold uppercase tracking-wide text-primary",
					children: "O que você recebe"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-2 text-center text-3xl font-bold text-foreground md:text-4xl",
					children: ["Tudo que falta para suas aulas ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-primary",
						children: "decolarem"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
					children: benefits.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-3 text-3xl",
								children: b.icon
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-heading text-base font-bold text-foreground",
								children: b.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: b.desc
							})
						]
					}, b.title))
				})
			]
		})
	});
}
var bonuses = [
	{
		img: "/assets/bonus-autoconhecimento-CSKrC0x6.webp",
		title: "Guia de Educação Inclusiva: Autismo em Sala de Aula",
		tag: "Mais procurado",
		desc: "Material completo com aulas, estratégias de comunicação, adaptação de atividades e orientações práticas para incluir alunos autistas no dia a dia da turma.",
		from: "R$ 49,00"
	},
	{
		img: "/assets/bonus-scripts-EFETht44.webp",
		title: "Pacote Completo com 100 Avaliações de Ciências",
		desc: "Avaliações diagnósticas, provas por bimestre, atividades avaliativas, critérios de correção e gabaritos.",
		from: "R$ 47,00"
	},
	{
		img: "/assets/bonus-mini-manual-CNIKJQgO.webp",
		title: "Guia do Professor para Aulas Dinâmicas",
		desc: "Transforme suas aulas em experiências mais divertidas, organizadas e com participação ativa.",
		from: "R$ 55,00"
	},
	{
		img: "/assets/bonus-imprimir-BRc1PIAk.webp",
		title: "Coleção de Planos de Aula Prontos",
		desc: "Chega de perder tempo planejando do zero. Aulas organizadas e prontas para aplicar imediatamente.",
		from: "R$ 37,00"
	},
	{
		img: "/assets/bonus-emocoes-Buu-w3cW.webp",
		title: "Planejamento de Aulas de Ciências",
		desc: "Planejamento estruturado para facilitar sua rotina, com clareza, sequência lógica e eficiência.",
		from: "R$ 37,00"
	},
	{
		img: "/assets/bonus-sem-exposicao-EL3OCjSj.webp",
		title: "Experimentos Prontos para Aplicar",
		desc: "Coleção de atividades práticas para trabalhar coordenação, agilidade, cooperação e participação.",
		from: "R$ 29,00"
	}
];
function BonusSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-secondary/60 px-4 py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container mx-auto max-w-6xl text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-bold uppercase tracking-wide text-primary",
					children: "Bônus exclusivos"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-3xl font-bold text-foreground md:text-4xl",
					children: "E ainda leva 6 BÔNUS de presente"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-3 text-muted-foreground",
					children: [
						"Mais de ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-bold text-foreground",
							children: "R$ 254,00"
						}),
						" em materiais extras no Plano Premium — seus, sem custo adicional."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
					children: bonuses.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col overflow-hidden rounded-2xl border border-border bg-card text-left shadow-sm transition-shadow hover:shadow-md",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: b.img,
								alt: b.title,
								loading: "lazy",
								className: "aspect-video w-full object-cover"
							}), b.tag && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute left-3 top-3 rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground",
								children: b.tag
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-1 flex-col p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-heading text-base font-bold text-foreground",
									children: b.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 flex-1 text-sm text-muted-foreground",
									children: b.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm text-muted-foreground line-through",
											children: b.from
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-heading text-lg font-extrabold text-primary",
											children: "R$ 0,00"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "ml-auto rounded-full bg-accent px-2.5 py-0.5 text-xs font-bold text-accent-foreground",
											children: "Grátis"
										})
									]
								})
							]
						})]
					}, b.title))
				})
			]
		})
	}) });
}
var PREMIUM_URL = "https://ggcheckout.app/checkout/v2/MGdkhlWHNrT7TMH9M7jd";
var BASIC_URL = "https://ggcheckout.app/checkout/v2/2ctXtprCPS0LXcEOCn5r";
var UPSELL_URL = "https://ggcheckout.app/checkout/v2/hV12xwguSspuTOvHnRku";
var basicFeatures = [
	"150 dinâmicas de Ciências prontas para uso",
	"Acesso 100% digital liberado após a compra",
	"Material pronto para assistir, imprimir e aplicar",
	"Conteúdos organizados com base na BNCC",
	"Garantia incondicional de 7 dias"
];
var premiumFeatures = [
	"Mais de 500 dinâmicas de Ciências completas",
	"Acesso imediato e vitalício ao material",
	"Experimentos que fazem até a turma mais bagunceira prestar atenção.",
	"Conteúdos organizados com base na BNCC",
	"Guia de Educação Inclusiva: Autismo em sala de aula",
	"Pacote com 100 avaliações completas",
	"Guia prático para aulas mais dinâmicas",
	"Planejamento anual estruturado passo a passo",
	"Coleção com experimentos prontos",
	"Atendimento prioritário + Garantia de 7 dias"
];
function PricingSection() {
	(0, import_react.useEffect)(() => {
		const overlay = document.getElementById("upsellOverlay");
		const closeBtn = document.getElementById("upsellClose");
		if (!overlay) return;
		function closeModal() {
			overlay.classList.remove("show");
			overlay.setAttribute("aria-hidden", "true");
			document.body.style.overflow = "";
		}
		closeBtn?.addEventListener("click", closeModal);
		overlay.addEventListener("click", function(e) {
			if (e.target === overlay) closeModal();
		});
		document.addEventListener("keydown", function(e) {
			if (e.key === "Escape" && overlay.classList.contains("show")) closeModal();
		});
		return () => {
			closeBtn?.removeEventListener("click", closeModal);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "pricing",
		className: "bg-background px-4 py-14",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container mx-auto max-w-5xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-sm font-bold uppercase tracking-wide text-primary",
					children: "Escolha seu plano"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-center text-3xl font-bold text-foreground md:text-4xl",
					children: "Um investimento que se paga em uma aula"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-4 max-w-2xl text-center text-muted-foreground",
					children: "No Premium, cada dinâmica sai por menos de R$0,04 — e recupera horas do seu fim de semana."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 grid items-start gap-8 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-2xl border border-border bg-card p-7 shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-heading text-lg font-bold text-foreground",
								children: "Essencial"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "Acesso completo ao pacote básico de dinâmicas de Ciências."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-sm text-muted-foreground",
										children: ["de ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "line-through",
											children: "R$ 47"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-heading text-4xl font-extrabold text-foreground",
										children: "R$ 10"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "pagamento único · sem mensalidades"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 space-y-2.5",
								children: basicFeatures.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2.5 text-sm text-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-accent" }), f]
								}, f))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								id: "btnEssencial",
								onClick: () => {
									const overlay = document.getElementById("upsellOverlay");
									if (overlay) {
										overlay.classList.add("show");
										overlay.setAttribute("aria-hidden", "false");
										document.body.style.overflow = "hidden";
									}
								},
								className: "mt-7 w-full rounded-xl border-2 border-primary px-6 py-3.5 font-heading font-bold text-primary transition-colors hover:bg-secondary",
								children: "Quero o Básico"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative rounded-2xl border-2 border-primary bg-card p-7 shadow-xl",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-wide text-primary-foreground",
								children: "⭐ Mais escolhido"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-heading text-lg font-bold text-foreground",
								children: "Premium"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted-foreground",
								children: "Tudo do Essencial + bônus exclusivos e acesso vitalício."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-sm text-muted-foreground",
										children: ["de ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "line-through",
											children: "R$ 97"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "font-heading text-5xl font-extrabold text-primary",
										children: "R$ 27,90"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground",
										children: "pagamento único · menos de R$0,04 por dinâmica"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
								className: "mt-6 space-y-2.5",
								children: premiumFeatures.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "flex items-start gap-2.5 text-sm font-medium text-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-accent" }), f]
								}, f))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: PREMIUM_URL,
								target: "_blank",
								rel: "noopener noreferrer",
								className: "mt-7 flex w-full items-center justify-center gap-2 rounded-xl px-6 py-4 font-heading font-bold uppercase tracking-wide text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl",
								style: { background: "linear-gradient(135deg, #006904 0%, #1f8b2f 100%)" },
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShoppingCart, { className: "h-5 w-5" }), "QUERO O PACOTE COMPLETO"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-center text-xs text-muted-foreground",
								children: "🔒 Pagamento 100% seguro · 🛡️ 7 dias de garantia incondicional"
							})
						]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "upsell-overlay",
			id: "upsellOverlay",
			"aria-hidden": "true",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "upsell-modal",
				role: "dialog",
				"aria-modal": "true",
				"aria-labelledby": "upsellTitle",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "upsell-close",
						id: "upsellClose",
						"aria-label": "Fechar",
						children: "✕"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "upsell-badge",
						children: "🎁 Oferta exclusiva, só agora"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "upsell-icon",
						children: "🚀"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						id: "upsellTitle",
						children: ["Espera! Por só mais um pouco, leve o ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Pacote Completo" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
						"Você está prestes a garantir o Essencial (150 dinâmicas). Mas por tempo limitado, dá pra destravar o ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Premium — mais de 500 dinâmicas, avaliações prontas, planejamento anual e acesso vitalício" }),
						" — pagando bem menos do que o valor normal."
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "upsell-price-box",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "upsell-price-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "upsell-old-price",
								children: "de R$ 27,90"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "upsell-new-price",
								children: ["R$ 19,90", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("small", { children: " só nesta tela" })]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "upsell-save",
							children: "Você economiza R$ 8 e leva 3x mais conteúdo"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "upsell-benefits",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Mais de 500 dinâmicas em vez de 150" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "100 avaliações prontas + planejamento anual completo" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Acesso vitalício com todas as atualizações futuras incluídas" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "upsell-actions",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: UPSELL_URL,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "upsell-btn-accept",
							id: "upsellAccept",
							children: "Sim! Quero o Completo por R$19,90 →"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: BASIC_URL,
							target: "_blank",
							rel: "noopener noreferrer",
							className: "upsell-btn-decline",
							id: "upsellDecline",
							children: "Não, prefiro continuar só com o Essencial"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "upsell-timer",
						children: "⏳ Esta condição é exibida apenas uma vez"
					})
				]
			})
		})]
	});
}
function GuaranteeSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-secondary/60 px-4 py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container mx-auto max-w-2xl rounded-2xl border-2 border-accent/40 bg-card p-8 text-center shadow-sm",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-accent/10",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-heading text-3xl font-extrabold text-accent",
						children: "7"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-bold uppercase tracking-wide text-accent",
					children: "Dias de Garantia"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-2xl font-bold text-foreground md:text-3xl",
					children: "Risco zero para você"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-muted-foreground",
					children: "Aplique as dinâmicas em sala por 7 dias. Se não sentir sua rotina mais leve e seus alunos mais engajados, devolvemos 100% do seu investimento — sem perguntas, sem burocracia. Toda a responsabilidade é nossa."
				})
			]
		})
	});
}
var testimonials = [
	{
		name: "Prof. Carlos M.",
		role: "Ensino Fundamental II — SP",
		quote: "Minhas aulas ficaram muito mais organizadas e os alunos começaram a participar muito mais das atividades. Valeu demais.",
		image: "/assets/testimonial-carlos-D4BwYog9.jpg"
	},
	{
		name: "Profª Juliana A.",
		role: "Ensino Médio — MG",
		quote: "Eu economizo várias horas por semana porque agora tenho atividades prontas para aplicar em sala.",
		image: "/assets/testimonial-juliana-BMFkbdA8.png"
	},
	{
		name: "Prof. André S.",
		role: "Fundamental I — BA",
		quote: "As aulas ficaram muito mais divertidas e participativas. Meus alunos passaram a amar Ciências.",
		image: "data:image/jpeg;base64,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"
	}
];
function TestimonialsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-secondary/60 px-4 py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container mx-auto max-w-5xl text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-bold uppercase tracking-wide text-primary",
					children: "Quem já usa, recomenda"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-3xl font-bold text-foreground md:text-4xl",
					children: "+12 mil professores transformaram suas aulas"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-6 md:grid-cols-3",
					children: testimonials.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col rounded-2xl border border-border bg-card p-6 text-left shadow-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex gap-0.5 text-chart-4",
								children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "h-4 w-4 fill-chart-4" }, i))
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-3 flex-1 text-sm italic text-foreground",
								children: [
									"\"",
									t.quote,
									"\""
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-5 flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: t.image,
									alt: t.name,
									loading: "lazy",
									className: "h-11 w-11 rounded-full object-cover"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-bold text-foreground",
									children: t.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: t.role
								})] })]
							})
						]
					}, t.name))
				})
			]
		})
	});
}
var author_sophia_default = "/assets/author-sophia-ByLnMhqO.webp";
var stats = [
	{
		value: "15+",
		label: "Anos em sala"
	},
	{
		value: "500+",
		label: "Recursos"
	},
	{
		value: "12k+",
		label: "Professores"
	}
];
function AuthorSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-background px-4 py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container mx-auto max-w-4xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-center text-sm font-bold uppercase tracking-wide text-primary",
					children: "Quem está por trás"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-center text-3xl font-bold text-foreground md:text-4xl",
					children: "Olá! Eu sou a Profª Sophia"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-10 flex flex-col items-center gap-8 rounded-2xl border border-border bg-card p-8 shadow-sm md:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: author_sophia_default,
						alt: "Profª Sophia",
						loading: "lazy",
						className: "h-44 w-44 shrink-0 rounded-full border-4 border-secondary object-cover shadow-md"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center md:text-left",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-muted-foreground",
								children: [
									"Há 15 anos em sala de aula como professora de Ciências, desenvolvi o",
									" ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-bold text-foreground",
										children: "BioAtividades"
									}),
									" para resolver a dificuldade que muitos professores enfrentam: criar aulas diferentes, organizadas e realmente envolventes."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-4 text-muted-foreground",
								children: "Cada uma das 500+ dinâmicas foi testada em turmas reais antes de chegar até você."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-6 grid grid-cols-3 gap-4",
								children: stats.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-heading text-xl font-extrabold text-primary",
									children: s.value
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs text-muted-foreground",
									children: s.label
								})] }, s.label))
							})
						]
					})]
				})
			]
		})
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
var faqs = [
	{
		q: "Como recebo o material depois da compra?",
		a: "Assim que o pagamento é aprovado, você recebe um e-mail com o acesso imediato à área de membros, onde pode baixar todos os PDFs e materiais."
	},
	{
		q: "Funciona para qual série / faixa etária?",
		a: "As dinâmicas cobrem do Ensino Fundamental ao Ensino Médio, com adaptações claras para cada faixa etária e nível de habilidade."
	},
	{
		q: "Preciso de internet para usar em aula?",
		a: "Não. Você baixa os arquivos uma vez e usa em sala offline — pode imprimir ou projetar sem depender de conexão."
	},
	{
		q: "Posso usar com várias turmas?",
		a: "Sim! O material é seu para usar com quantas turmas quiser, sem limite. É um investimento único."
	},
	{
		q: "E se eu não gostar?",
		a: "Você tem 7 dias de garantia incondicional. Se não gostar, basta enviar um e-mail e devolvemos 100% do seu investimento, sem perguntas."
	},
	{
		q: "As atualizações são realmente vitalícias?",
		a: "Sim. No Plano Premium, toda nova dinâmica adicionada à biblioteca fica disponível para você automaticamente, sem custo adicional."
	}
];
function FAQSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-secondary/60 px-4 py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container mx-auto max-w-3xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-10 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-bold uppercase tracking-wide text-primary",
					children: "Perguntas frequentes"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 text-3xl font-bold text-foreground md:text-4xl",
					children: "Tirando suas dúvidas"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
				type: "single",
				collapsible: true,
				className: "space-y-3",
				children: faqs.map((f, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
					value: `faq-${i}`,
					className: "rounded-xl border border-border bg-card px-6 transition-all data-[state=open]:border-primary/30 data-[state=open]:shadow-md",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
						className: "py-5 text-left font-heading font-semibold text-foreground hover:no-underline",
						children: f.q
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
						className: "pb-5 leading-relaxed text-muted-foreground",
						children: f.a
					})]
				}, i))
			})]
		})
	});
}
var DEMO_VIDEO_URL = "https://pacotespremium.com/wp-content/uploads/2026/06/BioAtividades-500-Dinamicas-de-Ciencias-Prontas-para-Aplicar-1-1.mp4";
var demoItems = [
	"Arquivos prontos em PDF de alta qualidade",
	"Layouts coloridos e atrativos para os alunos",
	"Instruções claras de aplicação para o professor",
	"Versões para imprimir ou projetar em sala"
];
function scrollToPricing$1() {
	document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
}
function DemoSection() {
	const videoRef = (0, import_react.useRef)(null);
	const [isPlaying, setIsPlaying] = (0, import_react.useState)(false);
	function togglePlayback() {
		const video = videoRef.current;
		if (!video) return;
		if (video.paused) {
			video.play();
			setIsPlaying(true);
		} else {
			video.pause();
			setIsPlaying(false);
		}
	}
	(0, import_react.useEffect)(() => {
		const video = videoRef.current;
		if (!video) return;
		video.muted = true;
		video.loop = true;
		const playPromise = video.play();
		if (playPromise) playPromise.then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-4 py-14",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container mx-auto max-w-5xl",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid items-center gap-10 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto w-[240px] max-w-[75%] lg:mx-0 lg:justify-self-end",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative aspect-[9/19] rounded-[40px] bg-foreground p-3 shadow-2xl lg:w-[300px]",
						style: { boxShadow: "0 0 0 3px #1f2937, 0 30px 80px rgba(11,42,31,0.35)" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute left-1/2 top-4 z-10 h-[22px] w-[90px] -translate-x-1/2 rounded-full bg-black" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "h-full w-full overflow-hidden rounded-[30px] bg-black",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
									ref: videoRef,
									src: DEMO_VIDEO_URL,
									muted: true,
									loop: true,
									playsInline: true,
									preload: "none",
									className: "h-full w-full object-cover",
									onEnded: () => setIsPlaying(false),
									onPause: () => setIsPlaying(false),
									onPlay: () => setIsPlaying(true)
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: togglePlayback,
								"aria-label": isPlaying ? "Pausar" : "Reproduzir",
								className: "absolute left-1/2 top-1/2 flex h-[68px] w-[68px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-white shadow-lg transition hover:scale-105",
								style: { background: "linear-gradient(135deg, #006904 0%, #1f8b2f 100%)" },
								children: isPlaying ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "h-7 w-7" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "ml-1 h-7 w-7" })
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "inline-block rounded-full bg-primary/10 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wide text-primary",
						children: "Demonstração"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-3 text-3xl font-bold text-foreground md:text-4xl",
						children: "Veja na prática um pouco do material"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-muted-foreground",
						children: "Um material visual, didático e pronto para aplicar em sala — dinâmicas que prendem a atenção e facilitam sua aula."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-6 space-y-3",
						children: demoItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3 text-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-white",
								style: { background: "linear-gradient(135deg, #006904 0%, #1f8b2f 100%)" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3" })
							}), item]
						}, item))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: scrollToPricing$1,
						className: "mt-7 inline-flex items-center gap-2 rounded-full px-8 py-4 font-heading font-bold uppercase tracking-wide text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl",
						style: { background: "linear-gradient(135deg, #006904 0%, #1f8b2f 100%)" },
						children: "Quero ter acesso →"
					})
				] })]
			})
		})
	});
}
function scrollToPricing() {
	document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
}
function StepsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-primary px-4 py-16 text-primary-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container mx-auto max-w-3xl text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl font-bold md:text-4xl",
					children: "Pronto para ter seu fim de semana de volta?"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto mt-4 max-w-2xl opacity-90",
					children: "Junte-se a mais de 12 mil professores que já deixaram suas aulas mais organizadas, participativas e divertidas — sem gastar o domingo planejando."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					onClick: scrollToPricing,
					className: "mt-8 inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4 font-heading font-bold uppercase tracking-wide text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl",
					style: { background: "linear-gradient(135deg, #006904 0%, #1f8b2f 100%)" },
					children: ["Quero recuperar meu tempo", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-5 w-5" })]
				})
			]
		})
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TopBanner, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PainSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BenefitsSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DemoSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BonusSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PricingSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GuaranteeSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestimonialsSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthorSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StepsSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "bg-foreground px-4 py-8 text-center text-sm text-background",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-heading font-bold",
						children: "BioAtividades"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 opacity-80",
						children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" BioAtividades — Todos os direitos reservados."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 opacity-70",
						children: "Em caso de dúvidas: contato@atividades.com"
					})
				]
			})
		]
	});
}
//#endregion
export { Index as component };
