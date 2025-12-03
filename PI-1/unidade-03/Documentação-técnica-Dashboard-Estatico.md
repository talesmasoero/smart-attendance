# Documentação Técnica: Processos de Manipulação de Dados (ETL)

## 1.  Resumo Geral do Fluxo de Dados

O fluxo de dados para o Dashboard Comparativo é um processo **offline e estático** que utiliza duas fontes primárias para criar a prova de conceito. O objetivo é higienizar, harmonizar e enriquecer os dados para o cálculo das KPIs.

**Fluxo ETL:**

1.  **Extract (Extração):** Leitura de dois *datasets* distintos: dados da chamada manual (observação) e dados da chamada automatizada (simulação).
2.  **Transform (Transformação):** Limpeza, padronização de tipos de dados (especialmente tempo) e criação de colunas de metadados essenciais para o cálculo do tempo por aluno e tempo total.
3.  **Load (Carregamento):** Os dados harmonizados são agregados, calculadas as KPIs e o resultado é carregado no ambiente de visualização (Matplotlib/Seaborn) para gerar o Dashboard.

---

## 2. 🧹 Descrição das Principais Transformações (Passo a Passo)

As transformações são executadas sequencialmente, primariamente dentro do *script* [smart-attendance.ipynb](PI-1\unidade-03\smart-attendance.ipynb).

### 2.1. Extração e Limpeza Inicial

| Fonte de Dados | Ação de Transformação | Ferramenta |
| :--- | :--- | :--- |
| **`Chamada_Manual.csv`** | **1. Leitura:** Importação do arquivo. **2. Tipo de Dados:** Conversão da coluna `Tempo` (formato MM:SS) para o tipo **timedelta** (tempo em segundos) para permitir cálculos aritméticos. | `pandas` |
| **`Chamada_Automatizada.csv`** | **1. Leitura:** Importação do arquivo. **2. Tempo:** Conversão da coluna `Timestamp Completo` para o tipo **datetime**. | `pandas` |

### 2.2. Enriquecimento de Dados Manuais (Cálculo do Tempo)

O objetivo principal aqui é calcular o tempo total gasto na chamada manual e o tempo médio por aluno.

1.  **Cálculo da Duração Total:** Agrupamento por `Disciplina`, `Local` e `Chamada` para obter o tempo médio total gasto por sessão de chamada manual.
2.  **Cálculo do Tempo por Aluno:** Criação de uma coluna `Tempo_Por_Aluno` (Simulação): Divide o `Tempo` total de cada registro manual pelo número médio de alunos na turma (premissa de aproximadamente 40 alunos por turma será aplicada).

### 2.3. Enriquecimento de Dados Automatizados (Cálculo de Duração)

O objetivo é calcular o tempo real que a chamada automatizada levou, do primeiro registro ao último.

1.  **Cálculo do *Time Window*:** Agrupamento por `Matéria`, `Tipo de Local` e data da `Timestamp Completo`.
2.  **Cálculo da Duração:** Para cada grupo, calcular a diferença entre o `max(Timestamp)` e o `min(Timestamp)`. Esta diferença representa o **Tempo Gasto pelo Smart Attendance**, que é inerentemente paralelo.

### 2.4. Harmonização e Agregação

1.  **Criação de Metadados de Comparação:** Criação de uma coluna `Metodo` em ambos os *datasets* (`Manual` e `Automatizado`).
2.  **Agregação:** Uso do `pd.concat` para unir os dois *datasets* em um único DataFrame (`df_consolidado`).
3.  **Cálculo das KPIs:** Uso de funções **NumPy** para calcular as médias, desvios e percentuais de redução de tempo.



