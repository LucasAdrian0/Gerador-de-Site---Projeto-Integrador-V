"use client";

import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./FormularioEditor.css";

// Tipos TypeScript
type Service = {
  id: string;
  title: string;
  description: string;
  image: string;
};

type PublicoAlvo = {
  id: number;
  text: string;
};

type Contato = {
  endereco: string;
  email: string;
  telefone: string;
};

type Textos = {
  principalServico: string;
  quemSomos: string;
  contato: Contato;
};

type FormData = {
  logo: string;
  services: Service[];
  publicoAlvo: PublicoAlvo[];
  segmentos: string[];
  textos: Textos;
};

// Schema de validação


const schema = yup.object().shape({
  logo: yup.string().required('Logo é obrigatório'),
  services: yup
    .array(
      yup.object().shape({
        id: yup.string().required('ID é obrigatório'), // Validação do campo id
        title: yup.string().required('Título é obrigatório'),
        description: yup.string().required('Descrição é obrigatória'),
        image: yup.string().required('Imagem é obrigatória'),
      })
    )
    .required('Serviços são obrigatórios'),
  publicoAlvo: yup
    .array(
      yup.object().shape({
        text: yup.string().required('Texto é obrigatório'),
      })
    )
    .required('Público-alvo é obrigatório'),
  segmentos: yup.array(yup.string()).required('Segmentos são obrigatórios'),
  textos: yup.object().shape({
    principalServico: yup.string().required('Serviço principal é obrigatório'),
    quemSomos: yup.string().required('Quem somos é obrigatório'),
    contato: yup.object().shape({
      endereco: yup.string().required('Endereço é obrigatório'),
      email: yup.string().required('Email é obrigatório'),
      telefone: yup.string().required('Telefone é obrigatório'),
    }),
  }),
});

const FormularioCreateSite: React.FC = () => {
    const [previewLogo, setPreviewLogo] = useState<string | null>(null);
    const [servicePreviews, setServicePreviews] = useState<Record<number, string>>({});
  
    // Configuração do react-hook-form
    const {
        control,
        handleSubmit,
        register,
        setValue,
        getValues,
        formState: { errors },
        reset,
      } = useForm<FormData>({
        resolver: yupResolver(schema),
        defaultValues: {
          logo: "",
          services: [], // Inicializar como array vazio
          publicoAlvo: [], // Inicializar como array vazio
          segmentos: [], // Inicializar como array vazio
          textos: {
            principalServico: "",
            quemSomos: "",
            contato: {
              endereco: "",
              email: "",
              telefone: "",
            },
          },
        },
      });
  
    // Outras funções e lógica do componente
    useEffect(() => {
      const loadInitialData = async () => {
        try {
          const response = await fetch("/formulario.json");
          if (!response.ok) {
            throw new Error("Erro ao carregar dados iniciais");
          }
          const data = await response.json();
  
          reset(data);
          setPreviewLogo(data.logo);
  
          // Configurar previews das imagens dos serviços
          const previews: Record<string, string> = {};
          data.services.forEach((service: Service) => {
            previews[service.id] = service.image;
          });
          setServicePreviews(previews);
        } catch (error) {
          console.error("Erro ao carregar dados iniciais:", error);
        }
      };
  
      loadInitialData();
    }, [reset]);
  
    const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files[0]) {
        const file = e.target.files[0];
        const reader = new FileReader();
  
        reader.onloadend = () => {
          const result = reader.result as string;
          setPreviewLogo(result);
          setValue("logo", result);
        };
  
        reader.readAsDataURL(file);
      }
    };
  
    const onSubmit = (data: FormData) => {
      console.log("Dados submetidos:", data);
      alert("Dados salvos com sucesso!");
    };
  
    return (
      <div className="form-container">
        <h1>Editor de Conteúdo</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Formulário */}
        </form>
      </div>
    );
  };
  

export default FormularioCreateSite;