#  Smart Attendance – Sistema Inteligente de Controle de Frequência

## 1. Visão Geral do Projeto

O **Smart Attendance** é um projeto estratégico de Ciência da Computação, estruturado ao longo dos Projetos Integradores, com o objetivo final de desenvolver e implementar um Sistema Automatizado de Controle de Frequência totalmente integrado ao ambiente universitário.

A missão principal do projeto é provar, através de Data Analytics rigorosa, que o processo tradicional de chamada manual é insustentável em termos de desperdício de tempo letivo e vulnerabilidade a fraudes.

A entrega final do projeto será um sistema robusto e seguro que:

Substitui integralmente a chamada nominal, utilizando QR Code dinâmico e Tokens temporais para registro de presença.

Oferece integração com os sistemas de gestão acadêmica da instituição (via API, em fases futuras).

Fornece Dashboards analíticos em tempo real para a Coordenação, transformando dados brutos de presença em insights acionáveis para gestão acadêmica.

O Projeto Integrador I (PI-1) serve como a fase crítica de Validação da Tese e desenvolvimento do MVP analítico.

---

## 2. O Problema: Ineficiência do Modelo Tradicional

O cenário atual da chamada manual no ambiente universitário apresenta um **gargalo operacional síncrono**, com os seguintes impactos negativos:

* **Desperdício de Tempo:** O professor gasta em média 10 a 20 minutos por sessão realizando a chamada nominal, reduzindo o tempo de exposição de conteúdo.
* **Vulnerabilidade à Fraude:** O sistema é suscetível ao "Buddy Punching" (registro de presença pelo colega) no modelo oral.
* **Interrupção Pedagógica:** A pausa no meio ou início da aula quebra o fluxo cognitivo de alunos e professores.

A tese do projeto é que **reformular o processo manual é ineficaz**; a solução requer a adoção de um processo paralelo e automatizado.

---

## 3. A Solução Proposta (MVP PI-1)

O Produto Mínimo Viável (MVP) do Smart Attendance para a fase de PI-1 foca na **prova de conceito analítica** e na **simulação do fluxo de uso**.

### 3.1. Arquitetura Conceitual
O sistema utiliza um modelo de **registro distribuído e seguro**, onde o professor abre a chamada, e o aluno a registra em seu dispositivo móvel, em paralelo, utilizando um dos seguintes métodos de validação:

* **QR Code Dinâmico:** Código visual escaneável.
* **Token Alfanumérico Temporal:** Código de 6 dígitos que se atualiza a cada 10/20 segundos, mitigando a fraude por compartilhamento remoto.

### 3.2. Entregáveis Principais do MVP

1.  **Dashboard de Análise de Dados:**
    * **Finalidade:** Comprovar a tese do projeto.
    * **Conteúdo:** Visualização de KPIs que comparam o **Tempo Médio Gasto** e a **Percepção de Fraude** entre o método Manual e o Smart Attendance.

2.  **Protótipo Funcional Básico (Front-end):**
    * **Finalidade:** Simular a experiência de uso.
    * **Fluxo:** Tela inicial com escolha de perfil (Professor/Aluno) → Painel do Professor (Geração de QR Code/Token rotativo simulado) → Painel do Aluno (Interface para leitura do QR Code ou inserção do Token).

---

## 4. Tecnologias Utilizadas

| Categoria | Ferramentas | Finalidade |
| :--- | :--- | :--- |
| **Front-end / Prototipagem** | HTML, CSS, JavaScript (JS) | Desenvolvimento das interfaces do MVP. |
| **Back-end / Análise de Dados** | **Python** | Linguagem principal para processamento de dados. |
| **Data Manipulation** | **Pandas, NumPy** | Limpeza, transformação (ETL) e agregação dos *datasets* de simulação (`Chamada_Manual.csv`, `Chamada_Automatizada.csv`). |
| **Visualização** | **Matplotlib, Seaborn** | Geração dos gráficos e do Dashboard das KPIs. |

---

## 5. Conformidade e Responsabilidade

O projeto adere aos princípios de **Segurança e Privacidade (*Privacy by Design*)**. Todos os dados de identificação utilizados são **anonimizados** e armazenados em repositório privado, em conformidade com as diretrizes da LGPD (Lei Geral de Proteção de Dados). O foco é garantir a integridade estatística sem violar a privacidade dos titulares.