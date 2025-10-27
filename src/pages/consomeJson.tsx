"use client";

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link'
import Image from 'next/image';
import './../components/consomeJson.css';


// Defina os tipos
type Service = {
    id: number;
    title: string;
    description: string;
    //image: string; - talvez utilizo add de imagens depois
};

type Data = {
    logo: string;
    services: Service[];
    publicoAlvo: { id: number; text: string }[];
    segmentos: string[];
    textos: {
        principalServico: string;
        quemSomos: string;
        contato: {
            endereco: string;
            email: string;
            telefone: string;
        };
    };
};

const ConsomeJson = () => {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [data, setData] = useState<Data>({
        logo: '',
        services: [],
        publicoAlvo: [],
        segmentos: [],
        textos: {
            principalServico: '',
            quemSomos: '',
            contato: {
                endereco: '',
                email: '',
                telefone: ''
            }
        }
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/formulario.json');
                if (!response.ok) {
                    throw new Error('Erro ao carregar dados');
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Erro:', error);
            }
        };

        fetchData();
    }, []);



    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!carouselRef.current) return;
        setIsDragging(true);
        setStartX(e.pageX - carouselRef.current.offsetLeft);
        setScrollLeft(carouselRef.current.scrollLeft);
    };

    const handleMouseLeave = () => setIsDragging(false);
    const handleMouseUp = () => setIsDragging(false);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging || !carouselRef.current) return;
        e.preventDefault();
        const x = e.pageX - carouselRef.current.offsetLeft;
        const walk = (x - startX) * 1.5;
        carouselRef.current.scrollLeft = scrollLeft - walk;
    };

    return (
        <div>
            <header className="appbar">
                <div className="appbar-left">
                    {data.logo && (
                        <Image 
                            src={data.logo} 
                            alt="Logo da Empresa" 
                            width={200} 
                            height={100} 
                            className="logo" 
                        />
                    )}
                </div>
                <nav className="appbar-right">
                    <Link href="/home" className="nav-link">Home</Link>
                    <Link href="/quem-somos" className="nav-link">Quem Somos</Link>
                    <Link href="/contato" className="nav-link">Contato</Link>
                </nav>
            </header>

            <div className="content-container">
                <div className="content-box">
                    <div className="left-box">
                        <h2>Nosso Principal Serviço</h2>
                        <p>{data.textos.principalServico}</p>
                    </div>
                    <div className="right-box">
                        <h2>Quem Somos</h2>
                        <p>{data.textos.quemSomos}</p>
                    </div>
                </div>
                <div className="wave"></div>
            </div>

            <section className="services-container">
                <h2>Serviços</h2>
                <div className="services-wrapper">
                    <div
                        className="services-carousel"
                        ref={carouselRef}
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                        style={{ display: 'flex', overflow: 'hidden', cursor: isDragging ? 'grabbing' : 'grab', gap: '20px' }}
                    >
                        {data.services.map((service) => (
                            <div
                                key={service.id}
                                className="service-card"
                                style={{
                                    flex: '0 0 30%',
                                    transition: 'transform 0.3s ease-in-out',
                                    userSelect: 'none',
                                }}
                            >
                                
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="wave-bottom"></div>
            </section>

            <div className="wave-container">
                <h2 className="publico-alvo-title">Público Alvo</h2>
                <div className="publico-alvo-wrapper">
                    {data.publicoAlvo.map((item) => (
                        <div key={item.id} className="publico-alvo-card">
                            <p>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
            
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-left">
                        <div className="footer-links">
                            <div className="footer-section">
                                <h3>Empresa</h3>
                                <ul>
                                    <li><a href="#">Sobre Nós</a></li>
                                    <li><a href="#">Serviços</a></li>
                                    <li><a href="#">Contato</a></li>
                                </ul>
                            </div>
                            <div className="footer-section">
                                <h3>Segmento</h3>
                                <ul>
                                    {data.segmentos.map((item, index) => (
                                        <li key={index}><a href="#">{item}</a></li>
                                    ))}
                                </ul>
                            </div>
                            <div className="footer-section">
                                <h3>Links</h3>
                                <ul>
                                    <li><a href="#">WhatsApp</a></li>
                                    <li><a href="#">Instagram</a></li>
                                    <li><a href="#">LinkedIn</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="footer-right">
                        <h3>Contato</h3>
                        <p>Endereço: {data.textos.contato.endereco}</p>
                        <p>Email: {data.textos.contato.email}</p>
                        <p>Telefone: {data.textos.contato.telefone}</p>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>Copyright © G7 DESIGN TECH 2025-2025 | Todos os direitos reservados.</p>
                </div>
            </footer>
        </div>
    );
};

export default ConsomeJson;