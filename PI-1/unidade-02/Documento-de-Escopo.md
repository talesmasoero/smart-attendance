# Documento de Escopo do Projeto e Definição do MVP

**Projeto:** Smart Attendance (Sistema de Chamada Inteligente)

**Fase:** Projeto Integrador I (PI-1)

**Tecnologias Core:** HTML, CSS, JavaScript, Python (Análise de Dados/Dashboard)

---

## 1. Visão Geral do Produto (Long-Term Vision)

O **Smart Attendance** é um sistema automatizado de controle de frequência acadêmica destinado a substituir a chamada nominal manual. A visão de longo prazo é fornecer uma solução integrada, segura e eficiente que maximize o tempo de aula e forneça à gestão do CEUB dados em tempo real sobre a assiduidade discente. O sistema deve ser escalável, auditável e compatível com as normas educacionais vigentes.

## 2. Objetivos Específicos para o PI-1 (Escopo Curto)

Os objetivos para a fase do Projeto Integrador I são focados primariamente na **validação da tese de negócio** (provar a ineficácia do modelo antigo) e na **criação de um fluxo de protótipo básico** para simular a solução.

| Objetivo | Descrição | Status |
| :--- | :--- | :--- |
| **Validação Analítica** | Coletar, processar e analisar dados (via Python) que comprovem o desperdício de tempo e a vulnerabilidade do modelo de chamada manual. | **CRÍTICO** |
| **Desenvolvimento do Dashboard** | Entregar um Dashboard interativo que visualize as KPIs de comparação entre os métodos. | **CRÍTICO** |
| **Protótipo Funcional Básico** | Implementar o fluxo de telas (HTML/JS) que simule a geração de QR Code/Token e o registro de presença pelo aluno. | **ESSENCIAL** |
| **Fundamentação Teórica** | Elaborar toda a documentação (Relatório de Imersão, Escopo, Definição do Problema) em formato acadêmico. | **ESSENCIAL** |

## 3. Definição do Produto Mínimo Viável (MVP)

O MVP para o PI-1 será uma **dupla entrega**: um protótipo de interface de usuário (front-end) e a prova de conceito analítica.

### 3.1. Funcionalidades IN-SCOPE (O que será entregue)

| Módulo | Funcionalidade (User Story) | Tecnologia |
| :--- | :--- | :--- |
| **Prototipagem Web (Front-End)** | | |
| **1. Login Simulado** | O usuário (professor ou aluno) deve poder escolher a rota de login através de botões simples na página inicial. | HTML/CSS/JS |
| **2. Geração de Chamada (Professor)** | A página do Professor deve exibir um QR Code e um Código de 6 dígitos que alternam visualmente (simulando a rotação de tokens a cada 10/20 segundos). | HTML/CSS/JS |
| **3. Registro de Presença (Aluno)** | A página do Aluno deve permitir a simulação do registro via leitura de QR Code (exibindo uma imagem de sucesso) ou input do código de 6 dígitos. | HTML/CSS/JS |
| **Análise de Dados** | | |
| **4. Processamento de Dados** | O sistema (Python) deve importar e tratar dados de pesquisa (Google Forms) e dados simulados (tempos de chamada). | Python (Pandas) |
| **5. Visualização (Dashboard Comparativo)** | O Dashboard deve exibir gráficos comparativos (KPIs) provando a tese do projeto. | Python (Matplotlib/Plotly) |

## 4. Itens FORA DO ESCOPO para PI-1

Os seguintes itens são considerados *Nice-to-Have* ou funcionalidades de longo prazo, sendo postergados para futuras iterações (PI-II e subsequentes):

| Item (Funcionalidade) | Justificativa de Exclusão (PI-1) |
| :--- | :--- |
| **Autenticação Real** | Login via credenciais reais, uso de banco de dados ou Firebase Auth. | Foco na prova de conceito, não em segurança de produção. |
| **Banco de Dados Persistente** | Armazenamento real de dados de presença de forma duradoura. | Os dados serão simulados e processados estaticamente para o Dashboard. |
| **Integração de Sistemas (API)** | Comunicação com o sistema acadêmico legado do CEUB. | Excede a complexidade e tempo disponível para PI-1. |
| **Geolocalização / Biometria** | Recursos avançados para combate a fraudes. | Recursos adicionais que não são essenciais para o MVP de validação. |
| **Design Responsivo Avançado** | O front-end será funcional e esteticamente agradável, mas não terá otimizações de *performance* ou *UX* aprofundadas. | Foco na funcionalidade e no *Back-end* Analítico. |

## 5. Restrições e Premissas

As seguintes restrições e premissas balizam o desenvolvimento do MVP no PI-1:

| Tipo | Descrição da Restrição/Premissa |
| :--- | :--- |
| **Tempo** | Duração limitada ao calendário da disciplina Projeto Integrador I. |
| **Dados** | Os dados primários para a análise virão de pesquisa externa (Google Forms) e simulação de tempo de chamada, não de dados reais da instituição. |
| **Tecnológica** | O sistema não pode depender de servidores web ou APIs complexas de terceiros. Deve ser um código executável localmente. |
| **Recursos** | A equipe de desenvolvimento é composta por alunos, com tempo de dedicação limitado. Não há acesso a recursos de TI institucional (exceto para entrevistas de imersão). |

## 6. Critérios de Sucesso do MVP

O MVP do Smart Attendance será considerado um sucesso no PI-1 se atender aos seguintes critérios de entrega:

1.  **Dashboard Completo:** Geração e apresentação de um Dashboard analítico via Python, contendo no mínimo os seguintes Indicadores-Chave de Desempenho (KPIs):
    * **KPI 1:** Tempo Médio Gasto (Manual) vs. Tempo Gasto (Smart Attendance) – *Percentual de Redução*.
    * **KPI 2:** Observações/interupções por ambiente(sala de aula x laboratório).
    * **KPI 3:** Custo de Oportunidade Total (Horas de Aula Recuperadas por Semestre/Disciplina).
2.  **Fluxo Operacional Demonstrável:** O protótipo web (HTML/JS) deve ser capaz de simular o fluxo completo de "Login Simulado -> Geração de Código -> Registro de Presença" de forma coerente e sem *bugs* críticos.
3.  **Documentação Acadêmica:** Entrega de todos os relatórios e documentos de gestão solicitados pela consultoria e pela disciplina.

