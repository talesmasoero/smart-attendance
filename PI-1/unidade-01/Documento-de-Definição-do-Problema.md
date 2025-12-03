# Documento de Definição do Problema (Problem Statement)

**Projeto:** Smart Attendance (Sistema de Chamada Inteligente)
**Responsável:** Consultoria de PI-1 / Equipe de Desenvolvimento

---

## 1. Contextualização do Problema

No cenário acadêmico atual do CEUB, a verificação de assiduidade discente permanece atrelada a um modelo tradicional e **linearmente dependente da intervenção humana**. O processo operacional (*As-Is*) segue um fluxo rígido:

1.  **Interrupção:** O docente precisa cessar a exposição de conteúdo (início ou fim da aula).
2.  **Acesso:** Login manual no sistema acadêmico via estação de trabalho do professor (púlpito).
3.  **Verificação Nominal:** O docente verbaliza o nome de cada estudante, um a um.
4.  **Resposta Síncrona:** O aluno deve estar atento para responder oralmente no momento exato.
5.  **Registro Manual:** O docente insere o *input* de presença ou falta no sistema.

Este fluxo, embora funcional, ignora as capacidades de automação disponíveis na computação moderna, tratando a coleta de dados de presença como um ritual administrativo manual em vez de um processo de dados automatizado.

---

## 2. Declaração Formal do Problema

O atual sistema de chamada manual constitui um **gargalo operacional síncrono**, onde a validação de presença consome uma fatia significativa do tempo letivo (estimada entre 10 a 20 minutos em turmas numerosas).

O problema central reside na **ineficácia do método de verificação unitária**, que gera simultaneamente **desperdício de recursos** (tempo de aula) e **baixa confiabilidade dos dados** (vulnerabilidade a fraudes como "responder pelo colega" e erros de audição/digitação). A persistência deste modelo impede a instituição de obter métricas precisas sobre a assiduidade real e prejudica a fluidez pedagógica.

---

## 3. Análise das Causas Principais

Utilizando uma abordagem de causa e efeito, identificamos as raízes do problema:

* **Método (Processo):** A chamada é realizada de forma sequencial ($O(n)$, onde $n$ é o número de alunos). O processo não é paralelizável no modelo atual.
* **Infraestrutura (Máquina):** Dependência exclusiva do computador do professor e do tempo de resposta do sistema legado durante o login.
* **Fator Humano:**
    * *Fadiga:* O professor pode cometer erros de *input* ao clicar na caixa de seleção errada.
    * *Cultura:* Normalização de pequenas fraudes acadêmicas entre alunos (presença solidária).
* **Ambiente:** Ruídos na sala de aula dificultam a audição da resposta do aluno, exigindo repetições que aumentam o tempo gasto.

---

## 4. Efeitos e Consequências

A não resolução deste problema gera impactos diretos nos *stakeholders*:

### Para a Instituição (Coordenação/CEUB)
* **Inconsistência de Dados:** Dificuldade em gerar relatórios de evasão precisos devido a presenças falsas.
* **Custo de Oportunidade:** Infraestrutura de sala de aula sendo utilizada para tarefas burocráticas em vez de ensino.

### Para os Professores
* **Perda de Carga Horária:** Redução do tempo disponível para explanação de conteúdo e dúvidas.
* **Quebra de *Flow*:** A interrupção para a chamada desmobiliza a atenção da turma e quebra a linha de raciocínio do docente.

### Para os Alunos
* **Prejuízo no Aprendizado:** Menos tempo de aula efetiva.
* **Inequidade:** Alunos assíduos sentem-se desmotivados ao verem colegas ausentes recebendo presença (fraude).

---

## 5. Oportunidades de Melhoria e Inovação

A implementação do **Smart Attendance** visa transformar este cenário através da descentralização do registro (o aluno registra sua própria presença) e validação criptográfica (tokens temporais).

**Objetivos do Projeto:**
* **Eficiência Temporal:** Reduzir o tempo total dedicado à chamada em **$X\%$** (meta estimada: redução de 15 min para < 2 min).
* **Acurácia dos Dados:** Aumentar a confiabilidade do registro de presença em **$Y\%$**, mitigando fraudes via rotação de códigos (QR Code dinâmico).
* **Modernização:** Implementar *Dashboard* analítico para visualização de KPIs de frequência em tempo real.

---

## 6. Escopo Conceitual

Para fins de desenvolvimento e validação acadêmica (PI-1), definimos os limites do problema:

**O que o problema engloba (IN-SCOPE):**
* O processo de interação professor-aluno dentro da sala de aula.
* A interface de geração (professor) e leitura (aluno) de tokens/QR Codes.
* A lógica de expiração de códigos para segurança básica.
* A coleta e visualização de dados estatísticos (Dashboard) sobre a eficiência do novo método versus o antigo.

**O que fica fora do problema (OUT-OF-SCOPE):**
* Integração real (API) com o banco de dados oficial/legado da instituição (o projeto usará uma base de dados simulada para o protótipo).
* Validação biométrica ou por geolocalização (GPS).
* Resolução de problemas de conectividade/Wi-Fi da infraestrutura do campus.