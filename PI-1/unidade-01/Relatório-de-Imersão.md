## Relatório de Imersão: Otimização do Controle de Frequência Acadêmica

---

### Projeto e Instituição

* **Projeto:** Smart Attendance (Sistema de Chamada Inteligente)
* **Curso:** Ciência da Computação – Projeto Integrador I
* **Instituição:** Centro Universitário de Brasília (**CEUB**)
* **Orientação:** Profa. Kadidja Valeria Reginaldo de Oliveira

---

## 1. Introdução e Objetivo

O presente relatório consolida a fase de **imersão** do projeto "Smart Attendance". O objetivo central é diagnosticar a ineficiência do atual modelo de registro de presença (**chamada manual**) nas aulas universitárias e propor uma solução tecnológica baseada em validação por **QR Code** e **tokens temporais**.

O foco deste estudo não é apenas o desenvolvimento de um **MVP** (Minimum Viable Product) funcional, mas, primordialmente, a comprovação analítica — via coleta e análise de dados — de que o método vigente acarreta **prejuízos acadêmicos mensuráveis**, como perda de tempo letivo e vulnerabilidade a fraudes.

---

## 2. Metodologia de Pesquisa

Para a compreensão holística do problema, foram utilizadas técnicas de imersão qualitativa e quantitativa, envolvendo os principais atores do ecossistema acadêmico do CEUB.

### 2.1. Fontes de Informação

* **Entrevistas em Profundidade:** Realizadas com a Coordenação do Curso de Ciência da Computação e com a equipe de Tecnologia da Informação (**TI**) da instituição para entender a viabilidade técnica e as necessidades administrativas.
* **Observação *In Loco*:** Acompanhamento de aulas reais para cronometrar e qualificar o processo de chamada manual.
* **Simulação de Cenários:** Testes controlados para estimar o tempo médio gasto por aluno em diferentes métodos de chamada.
* **Coleta de Dados (Survey):** Aplicação de questionários via Google Forms para validar a percepção de alunos e professores sobre o sistema atual.

---

## 3. Mapeamento de Stakeholders

A identificação correta das partes interessadas é crucial para o sucesso da adoção do sistema.

| Stakeholder | Perfil | Interesse/Dores Principais |
| :--- | :--- | :--- |
| **Coordenação (Cliente)** | Estratégico | Veracidade dos dados, relatórios de evasão, cumprimento da carga horária. Representada pela Profa. Kadidja e gestão do curso. |
| **Professores** | Usuário Direto | Maximizar tempo de aula, reduzir burocracia, evitar interrupções no raciocínio durante a aula. |
| **Alunos** | Usuário Final | Agilidade no registro, transparência nas faltas, evitar "perder a chamada" por distração. |
| **Equipe de TI** | Técnico | Segurança da rede, integração com sistemas legados, infraestrutura de Wi-Fi. |

---

## 4. Análise do Cenário Atual (As-Is)

Atualmente, o processo de chamada no CEUB é predominantemente **manual** e **analógico** em sua execução, ainda que o lançamento final seja digital.

### Fluxo Observado:

1.  O professor interrompe a aula (geralmente no início ou fim).
2.  Acessa o sistema acadêmico no computador do púlpito.
3.  Realiza a chamada nominal (um a um).
4.  O aluno responde oralmente.
5.  O professor registra a presença/ausência.

### 4.1. Análise de Complexidade Temporal 

Do ponto de vista computacional, o sistema atual opera de forma **linear** e **síncrona**. Se definirmos $n$ como o número de alunos e $t_i$ como o tempo de resposta e registro do $i$-ésimo aluno, a fórmula para o tempo total $T_{total}$ gasto na chamada é:

$$T_{total} = T_{setup} + \sum_{i=1}^{n} t_i$$

Onde $T_{setup}$ é o tempo de login e carregamento do sistema.

Em turmas numerosas ($40+$ alunos), $T_{total}$ pode facilmente exceder **15 minutos**, representando uma perda significativa da carga horária semestral. A proposta do Smart Attendance visa alterar essa complexidade para um modelo **assíncrono e paralelo**, onde múltiplos alunos registram presença simultaneamente.

---

## 5. Diagnóstico de Problemas e Dores

A imersão revelou quatro vetores principais de ineficiência que serão combatidos pelo projeto:

* **Desperdício de Tempo (Ineficácia Operacional):** A chamada consome tempo valioso que deveria ser dedicado ao ensino.
* **Vulnerabilidade a Fraudes (Integridade):** O fenômeno do "**Buddy Punching**" (responder pelo colega) é comum e difícil de auditar no modelo oral.
* **Interrupção Cognitiva:** A pausa para a chamada quebra o fluxo de aprendizado e a concentração da turma.
* **Erros de Registro Humano:** Professores podem ouvir mal ou clicar errado, gerando retrabalho administrativo para a coordenação corrigir faltas indevidas.

---

## 6. Solução Proposta e Estratégia de Dados

### 6.1. O MVP (Produto Mínimo Viável) 

Desenvolveremos um protótipo web responsivo utilizando HTML, CSS e JavaScript no *front-end*.

* **Módulo Professor:** Gera um QR Code dinâmico associado a um código alfanumérico de 6 dígitos.
* **Segurança:** O código/QR Code **expira e se renova a cada 10 a 20 segundos** (**Tokenização**), impedindo que alunos tirem fotos e enviem para colegas fora da sala.
* **Módulo Aluno:** Opção de escanear o QR Code ou digitar o token atual.

### 6.2. Analytics

Utilizaremos os dados coletados via Google Forms e os dados simulados do sistema para gerar **KPIs** (Indicadores-Chave de Desempenho).

**KPIs previstos para o Dashboard:**

* **Tempo Médio Economizado por Aula:** Comparativo (Chamada Manual *vs.* Smart Attendance).
* **Taxa de Presença Real:** Detecção de anomalias estatísticas.
* **ROI de Tempo:** Quantas horas de aula são "recuperadas" em um semestre letivo.

---

## 7. Requisitos Técnicos e Restrições

Considerando o ambiente do CEUB e o escopo de PI-1:

* **Infraestrutura:** A solução deve ser **leve**, considerando possíveis instabilidades na rede Wi-Fi da universidade.
* **Adoção:** A interface deve ser extremamente **intuitiva** para evitar resistência por parte de professores menos afeitos à tecnologia.
* **Tecnologia:** Uso de bibliotecas Python (Pandas, Matplotlib/Plotly) para o tratamento de dados e geração gráfica.

---

## 8. Conclusão da Imersão

A imersão conclui que a modernização do sistema de chamadas é **urgente e viável**. A mudança do processo manual para o digital automatizado não é apenas uma conveniência, mas uma **recuperação de ativo (tempo)**. O projeto seguirá para a fase de desenvolvimento focado na demonstração dessa tese através dos dados.

