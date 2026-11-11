window.QuestionBank = (function() {

  // ==========================================
  // 1. DEFINICIÓN DE LOS 9 TEMAS
  // ==========================================
  const CHAPTER_DATA = {
    1: { id: 1, title: 'Tema 1: Funciones del Lenguaje', desc: 'Relación entre las intenciones comunicativas y los 6 elementos del esquema de comunicación.', color: 'bg-duoGreen', shadow: 'shadow-btn-green' },
    2: { id: 2, title: 'Tema 2: Los Sintagmas', desc: 'Estructura sintagmática, locuciones, recategorización, ambigüedad sintáctica y pares mínimos.', color: 'bg-duoBlue', shadow: 'shadow-btn-blue' },
    3: { id: 3, title: 'Tema 3: La Oración', desc: 'El Sujeto, la prueba infalible de la concordancia, oraciones impersonales y las voces verbales.', color: 'bg-duoPurple', shadow: 'shadow-btn-purple' },
    4: { id: 4, title: 'Tema 4: Tipos de Verbos', desc: 'Transitividad, usos absolutos, verbos inacusativos, inergativos, copulativos y semicopulativos.', color: 'bg-duoOrange', shadow: 'shadow-btn-orange' },
    5: { id: 5, title: 'Tema 5: Sociolingüística', desc: 'Variación diatópica (septentrional, meridional y América), diafásica, diastrática y diacrónica.', color: 'bg-duoRed', shadow: 'shadow-btn-red' },
    6: { id: 6, title: 'Tema 6: Los Papeles Temáticos', desc: 'Roles semánticos: Agente, Causa, Paciente, Tema, Experimentante, Destinatario, Locativo e Instrumento.', color: 'bg-duoYellow', shadow: 'shadow-btn-yellow' },
    7: { id: 7, title: 'Tema 7: Predicados y Argumentos', desc: 'Estructura argumental del verbo, complementos exigidos (argumentos I y II) y adjuntos.', color: 'bg-duoCyan', shadow: 'shadow-btn-blue' },
    8: { id: 8, title: 'Tema 8: Figuras Retóricas', desc: 'Recursos estilísticos literarios: metáfora, metonimia, símil, sinécdoque, aliteración y anáfora.', color: 'bg-duoPurblue', shadow: 'shadow-btn-purple' },
    9: { id: 9, title: 'Tema 9: Tópicos Literarios', desc: 'Motivos temáticos clásicos: Carpe diem, Locus amoenus, Beatus ille, Tempus fugit y Ubi sunt.', color: 'bg-duoPink', shadow: 'shadow-btn-purple' }
  };

  // ==========================================
  // 2. TIMELINE DATA (SECUENCIAS Y ORDENADORES)
  // Sin números en el texto visible de las respuestas
  // ==========================================
  const timelineData = {
    1: {
      modelType: 'vertical',
      exp: 'Secuencia lógica del proceso comunicativo según la función lingüística orientada a cada elemento.',
      elements: [
        { id: 't1_1', text: 'Emisión inicial ⟶ El Emisor manifiesta sus emociones o estados de ánimo (Función Expresiva)', order: 1 },
        { id: 't1_2', text: 'Codificación ⟶ Se estructura el mensaje ajustándose al código lingüístico (Función Metalingüística)', order: 2 },
        { id: 't1_3', text: 'Verificación del canal ⟶ Se comprueba o mantiene abierta la conexión física (Función Fática)', order: 3 },
        { id: 't1_4', text: 'Configuración estilística ⟶ Se cuida la forma estética y el juego de palabras (Función Poética)', order: 4 },
        { id: 't1_5', text: 'Recepción e influencia ⟶ El Receptor capta el mensaje y reacciona al mandato (Función Apelativa)', order: 5 },
        { id: 't1_6', text: 'Contraste referencial ⟶ El enunciado se vincula objetivamente con la realidad (Función Referencial)', order: 6 }
      ]
    },
    2: {
      modelType: 'horizontal',
      exp: 'Disposición lineal interna de izquierda a derecha en un Sintagma Nominal (SN) complejo.',
      elements: [
        { id: 't2_1', text: 'Modificador prenominal ⟶ Adverbio de foco o determinante posicionado a la izquierda (ej: "Incluso los")', order: 1 },
        { id: 't2_2', text: 'Núcleo central ⟶ Sustantivo o pronombre indispensable sobre el que gira el sintagma (ej: "arquitectos")', order: 2 },
        { id: 't2_3', text: 'Complemento posterior ⟶ Sintagma adjetival, preposicional o aposición pospuesta (ej: "renacentistas")', order: 3 }
      ]
    },
    3: {
      modelType: 'build',
      exp: 'Algoritmo metódico para aplicar la prueba sintáctica de la concordancia al aislar el Sujeto.',
      elements: [
        { id: 't3_1', text: 'Localizar el verbo conjugado principal del predicado oracional', order: 1 },
        { id: 't3_2', text: 'Modificar el número gramatical del verbo (pasar de singular a plural o viceversa)', order: 2 },
        { id: 't3_3', text: 'Identificar qué sintagma nominal se ve forzado a cambiar de número para mantener la gramaticalidad', order: 3 },
        { id: 't3_4', text: 'Concluir que dicho sintagma forzado a concordar en número y persona es el Sujeto sintáctico', order: 4 }
      ]
    },
    4: {
      modelType: 'build',
      exp: 'Pasos de diagnóstico sintáctico para diferenciar un verbo inacusativo de uno inergativo.',
      elements: [
        { id: 't4_1', text: 'Evaluar la admisión de construcciones en participio absoluto pospuesto', order: 1 },
        { id: 't4_2', text: 'Comprobar la aceptación de un sujeto nominal posverbal sin determinantes ni modificadores', order: 2 },
        { id: 't4_3', text: 'Verificar la incompatibilidad semántica con adverbios intencionales como "adrede"', order: 3 },
        { id: 't4_4', text: 'Constatar la imposibilidad de derivar sustantivos de agente mediante el sufijo -dor', order: 4 }
      ]
    },
    5: {
      modelType: 'vertical',
      exp: 'Gradación de la variación diafásica según el nivel de formalidad y planificación del contexto comunicativo.',
      elements: [
        { id: 't5_1', text: 'Registro técnico-científico ⟶ Máxima planificación, terminología especializada y precisión objetiva', order: 1 },
        { id: 't5_2', text: 'Registro formal académico ⟶ Estricto acatamiento de la norma culta y riqueza léxica', order: 2 },
        { id: 't5_3', text: 'Registro coloquial cotidiano ⟶ Espontaneidad oral, expresividad afectiva y muletillas', order: 3 },
        { id: 't5_4', text: 'Argot o jerga grupal ⟶ Léxico específico para cohesionar el colectivo o mantener la opacidad', order: 4 },
        { id: 't5_5', text: 'Nivel vulgar ⟶ Incorrecciones morfosintácticas y desviación no intencionada de la norma', order: 5 }
      ]
    },
    6: {
      modelType: 'horizontal',
      exp: 'Jerarquía semántica de asignación de roles temáticos en la predicación.',
      elements: [
        { id: 't6_1', text: 'Agente o Causa ⟶ Entidad voluntaria o fuerza inanimada que desencadena el proceso verbal', order: 1 },
        { id: 't6_2', text: 'Instrumento ⟶ Objeto o medio físico empleado intencionadamente para realizar la acción', order: 2 },
        { id: 't6_3', text: 'Paciente o Tema ⟶ Entidad que sufre la transformación o sobre la que se predica el estado', order: 3 },
        { id: 't6_4', text: 'Destinatario o Receptor ⟶ Entidad animada hacia la que se encamina la transferencia verbal', order: 4 }
      ]
    },
    7: {
      modelType: 'build',
      exp: 'Jerarquía en la estructura de argumentos y adjuntos de una oración predicativa.',
      elements: [
        { id: 't7_1', text: 'Predicado verbal ⟶ Unidad léxica con significado pleno que determina los valencias requeridas', order: 1 },
        { id: 't7_2', text: 'Argumentos exigidos ⟶ Complementos indispensables seleccionados por la semántica del verbo', order: 2 },
        { id: 't7_3', text: 'Adjuntos perimetrales ⟶ Modificadores opcionales que aportan datos circunstanciales no requeridos', order: 3 }
      ]
    },
    8: {
      modelType: 'vertical',
      exp: 'Proceso de decodificación estética de los recursos estilísticos literarios.',
      elements: [
        { id: 't8_1', text: 'Identificación del término real y el término evocado en la figura espacial o trópica', order: 1 },
        { id: 't8_2', text: 'Detección del mecanismo de transferencia semántica (semejanza, contigüidad o inclusión)', order: 2 },
        { id: 't8_3', text: 'Valoración del efecto expresivo e inferencias poéticas producidas en el lector', order: 3 }
      ]
    },
    9: {
      modelType: 'horizontal',
      exp: 'Este ejercicio no se puede cargar correctamente',
      elements: [
        { id: 't9_1', text: 'Lo Sentimos. Este Ejercicio No Funciona', order: 1 },
      ]
    }
  };

  // ==========================================
  // 3. GENERADORES DE KAHOOT (TEMAS 1 AL 9)
  // ==========================================
  const getKahoot = (chapterId, count) => {
    const data = {
      1: [
        {
          type: 'classic',
          question: 'En enunciados como "¿Oiga? ¿Mantiene la llamada activa al otro lado?" o "Comprendes el punto, ¿verdad?", ¿qué función predomina?',
          exp: 'Predomina la función fática porque su propósito es cerciorarse de que el canal comunicativo está abierto y receptivo [1], [9].',
          options: [
            { text: 'Función Referencial', correct: false },
            { text: 'Función Fática', correct: true },
            { text: 'Función Metalingüística', correct: false },
            { text: 'Función Expresiva', correct: false }
          ]
        },
        {
          type: 'classic',
          question: '¿Qué función lingüística se activa en: "La palabra \'esdrújula\' lleva tilde en la antepenúltima sílaba"?',
          exp: 'Es la función metalingüística, al emplear el propio código lingüístico para examinar sus normas [1].',
          options: [
            { text: 'Función Metalingüística', correct: true },
            { text: 'Función Apelativa', correct: false },
            { text: 'Función Poética', correct: false },
            { text: 'Función Referencial', correct: false }
          ]
        },
        {
          type: 'multi',
          question: 'En el eslogan "En este viaje (des)conecta de todo", ¿qué intenciones comunicativas se combinan?',
          exp: 'Presenta función apelativa por incitar al receptor, poética por el juego visual del paréntesis y emotiva por apelar al descanso [9].',
          options: [
            { id: 'm1', text: 'Función Apelativa (orientada a mover la conducta del consumidor)', correct: true },
            { id: 'm2', text: 'Función Poética (creación de doble sentido con el paréntesis)', correct: true },
            { id: 'm3', text: 'Función Emotiva (evocación de sentimientos de libertad)', correct: true },
            { id: 'm4', text: 'Función Metalingüística (definición formal de diccionario)', correct: false }
          ]
        }
      ],
      2: [
        {
          type: 'classic',
          question: '¿Qué elemento de la estructura sintagmática es el único IMPRESCINDIBLE que otorga categoría al sintagma?',
          exp: 'El núcleo es el único elemento obligatorio alrededor del cual giran modificadores y complementos [10].',
          options: [
            { text: 'El modificador adjetival', correct: false },
            { text: 'El núcleo', correct: true },
            { text: 'El complemento del nombre', correct: false },
            { text: 'La preposición enlace', correct: false }
          ]
        },
        {
          type: 'classic',
          question: 'En el par mínimo "Gonzalo preparó la pasta con atún" frente a "Gonzalo preparó la pasta con esmero", ¿qué función tiene "con esmero"?',
          exp: '"Con esmero" es un Complemento Circunstancial de Modo que modifica al verbo, mientras que "con atún" es un CN de la pasta [3], [11].',
          options: [
            { text: 'Complemento del Nombre (CN)', correct: false },
            { text: 'Complemento Circunstancial de Modo', correct: true },
            { text: 'Complemento de Régimen Verbal (CRV)', correct: false },
            { text: 'Complemento Directo (CD)', correct: false }
          ]
        },
        {
          type: 'multi',
          question: 'Selecciona las construcciones que presentan AMBIGÜEDAD SINTÁCTICA por adscripción de Sintagma Preposicional:',
          exp: 'Existe ambigüedad sintáctica cuando un SPrep se puede adscribir a dos núcleos distintos en la oración [3].',
          options: [
            { id: 'm1', text: 'Un estuche de lápices de plástico', correct: true },
            { id: 'm2', text: 'Ofertas en chaquetas de cuero de marinero', correct: true },
            { id: 'm3', text: 'Para las picaduras (etiqueta en loción antipicaduras)', correct: true },
            { id: 'm4', text: 'El portátil gris de la ingeniera', correct: false }
          ]
        }
      ],
      3: [
        {
          type: 'classic',
          question: 'En la oración "A Sofía le fascinan los videojuegos", ¿cuál es el Sujeto sintáctico?',
          exp: 'Al cambiar el verbo a singular ("fascina"), el sintagma forzado a cambiar a singular es "el videojuego". "A Sofía" empieza por preposición y NUNCA puede ser sujeto [4].',
          options: [
            { text: 'A Sofía', correct: false },
            { text: 'Le', correct: false },
            { text: 'Los videojuegos', correct: true },
            { text: 'Sujeto tácito (Ella)', correct: false }
          ]
        },
        {
          type: 'classic',
          question: '¿Cómo aislamos el Sujeto en una oración copulativa como "Clara es la directora"?',
          exp: 'Sustituyendo el atributo por el pronombre "LO" ("Clara lo es"); el elemento que queda sin pronominalizar equivale al Sujeto [12].',
          options: [
            { text: 'Preguntando ¿quién? al verbo.', correct: false },
            { text: 'Pronominalizando el atributo por "LO" para dejar al descubierto el Sujeto.', correct: true },
            { text: 'Elidiendo el verbo copulativo.', correct: false },
            { text: 'Pasando obligatoriamente la frase a pasiva perifrástica.', correct: false }
          ]
        },
        {
          type: 'multi',
          question: 'Selecciona las oraciones sintácticamente IMPERSONALES:',
          exp: 'Son impersonales las oraciones que carecen constitutivamente de sujeto explícito o tácito [13].',
          options: [
            { id: 'm1', text: 'Hubo bastantes imprevistos en la asamblea.', correct: true },
            { id: 'm2', text: 'Truena copiosamente en la cordillera.', correct: true },
            { id: 'm3', text: 'Se premió a los ganadores del concurso.', correct: true },
            { id: 'm4', text: 'Le agrada pasear por el parque.', correct: false }
          ]
        }
      ],
      4: [
        {
          type: 'classic',
          question: 'En la oración "Brotaron manantiales en la ladera", ¿qué tipo de verbo es "brotar"?',
          exp: 'Es un verbo inacusativo: denota un suceso no voluntario, admite sujeto posverbal sin determinante y carece de derivados de agente en -dor [14], [5].',
          options: [
            { text: 'Verbo Inergativo', correct: false },
            { text: 'Verbo Inacusativo', correct: true },
            { text: 'Verbo Semicopulativo', correct: false },
            { text: 'Verbo Copulativo', correct: false }
          ]
        },
        {
          type: 'classic',
          question: 'En la frase "El atleta nada en el lago cada tarde", ¿qué uso verbal se presenta?',
          exp: 'Es un uso inergativo de un verbo intransitivo con sujeto agente consciente e intencional [14], [5].',
          options: [
            { text: 'Uso inergativo (sujeto agente consciente)', correct: true },
            { text: 'Uso inacusativo (sujeto no intencional)', correct: false },
            { text: 'Uso transitivo con CD explícito', correct: false },
            { text: 'Uso copulativo identificativo', correct: false }
          ]
        },
        {
          type: 'multi',
          question: 'Selecciona las oraciones que contengan VERBOS SEMICOPULATIVOS:',
          exp: 'Los verbos semicopulativos reducen su carga léxica y requieren un atributo para completar la predicación [15], [16].',
          options: [
            { id: 'm1', text: 'El empleado quedó satisfecho tras la reunión.', correct: true },
            { id: 'm2', text: 'La entrenadora se puso furiosa con el resultado.', correct: true },
            { id: 'm3', text: 'La abogada anda preocupada por el fallo.', correct: true },
            { id: 'm4', text: 'La arquitecta diseña planos en el estudio.', correct: false }
          ]
        }
      ],
      5: [
        {
          type: 'classic',
          question: '¿Qué variedad lingüística analiza las adaptaciones según la situación comunicativa y el nivel de formalidad?',
          exp: 'La variedad diafásica o registro adapta la lengua al grado de formalidad del contexto [17], [18].',
          options: [
            { text: 'Variedad Diatópica', correct: false },
            { text: 'Variedad Diafásica', correct: true },
            { text: 'Variedad Diastrática', correct: false },
            { text: 'Variedad Diacrónica', correct: false }
          ]
        },
        {
          type: 'classic',
          question: 'El fenómeno fónico que sustituye el sonido consonántico de "z" o "ci/ce" por "s" se denomina:',
          exp: 'El seseo es un rasgo fonético característico del español meridional y de América [19], [20].',
          options: [
            { text: 'Seseo', correct: true },
            { text: 'Ceceo', correct: false },
            { text: 'Yeísmo rehilado', correct: false },
            { text: 'Rotacismo', correct: false }
          ]
        },
        {
          type: 'multi',
          question: 'Selecciona los rasgos morfosintácticos propios del ESPAÑOL DE AMÉRICA:',
          exp: 'Destacan el empleo de "ustedes" para la 2ª persona del plural, el uso preferente del pretérito perfecto simple y la profusión de diminutivos [20].',
          options: [
            { id: 'm1', text: 'Sustitución de "vosotros" por "ustedes" en la 2ª persona del plural', correct: true },
            { id: 'm2', text: 'Preferencia del pretérito perfecto simple ("hoy llegué") sobre el compuesto', correct: true },
            { id: 'm3', text: 'Uso frecuente de diminutivos afectivos ("ahorita", "cerquita")', correct: true },
            { id: 'm4', text: 'Uso de laísmo sintáctico normativo', correct: false }
          ]
        }
      ],
      6: [
        {
          type: 'classic',
          question: 'En la oración "El terremoto sacudió la estructura del edificio", ¿qué papel temático cumple "El terremoto"?',
          exp: '"El terremoto" actúa como Causa, al ser una fuerza inanimada que desencadena la acción sin intencionalidad consciente [21].',
          options: [
            { text: 'Agente', correct: false },
            { text: 'Causa', correct: true },
            { text: 'Experimentante', correct: false },
            { text: 'Instrumento', correct: false }
          ]
        },
        {
          type: 'classic',
          question: 'En la frase "La investigadora experimentó fascinación con los resultados", ¿qué rol temático desempeña "La investigadora"?',
          exp: '"La investigadora" es un Experimentante, al percibir o sentir un estado psicológico u orientativo [7].',
          options: [
            { text: 'Experimentante', correct: true },
            { text: 'Agente', correct: false },
            { text: 'Paciente', correct: false },
            { text: 'Locativo', correct: false }
          ]
        },
        {
          type: 'multi',
          question: 'Selecciona las oraciones donde el elemento entre corchetes cumpla la función de DESTINATARIO o RECEPTOR:',
          exp: 'El Destinatario/Receptor es la entidad animada hacia la que se orienta la transferencia del objeto o mensaje [7].',
          options: [
            { id: 'm1', text: 'El docente explicó el tema [a los alumnos].', correct: true },
            { id: 'm2', text: 'La mensajera entregó el paquete [al recepcionista].', correct: true },
            { id: 'm3', text: 'El autor dedicó su obra [a sus lectores].', correct: true },
            { id: 'm4', text: 'El técnico ajustó la pieza [con un destornillador].', correct: false }
          ]
        }
      ],
      7: [
        {
          type: 'classic',
          question: 'En la oración "El ponente convenció al auditorio de su propuesta", ¿qué función sintáctica cumple "de su propuesta"?',
          exp: 'Es un Complemento de Régimen Verbal (CRV) exigido por el significado de "convencer" ([alguien] convence [a alguien] [de algo]) [22], [23].',
          options: [
            { text: 'Complemento Circunstancial de Tema', correct: false },
            { text: 'Complemento de Régimen Verbal (CRV)', correct: true },
            { text: 'Complemento Directo (CD)', correct: false },
            { text: 'Complemento Predicativo (CPred)', correct: false }
          ]
        },
        {
          type: 'classic',
          question: '¿Qué diferencia a un argumento de un adjunto en la estructura oracional?',
          exp: 'Los argumentos son complementos obligatorios exigidos por la valencia verbal; los adjuntos aportan información perimetral prescindible [24].',
          options: [
            { text: 'Los argumentos siempre van precedidos de preposición.', correct: false },
            { text: 'Los argumentos son requeridos por la semántica del verbo; los adjuntos son opcionales.', correct: true },
            { text: 'Los adjuntos no pueden eliminarse sin destruir la oración.', correct: false },
            { text: 'Los argumentos solo funcionan en la voz pasiva.', correct: false }
          ]
        },
        {
          type: 'multi',
          question: 'Selecciona las oraciones que contengan COMPLEMENTOS ARGUMENTALES (exigidos por el verbo):',
          exp: 'El CMedAR, CLocAR, CRV y CD representan argumentos requeridos por el verbo [8], [25], [22], [23].',
          options: [
            { id: 'm1', text: 'La escultura pesa cincuenta kilos.', correct: true },
            { id: 'm2', text: 'La fábrica se ubicó en el polígono.', correct: true },
            { id: 'm3', text: 'El embajador residió en Praga.', correct: true },
            { id: 'm4', text: 'Cenaron ensalada pacíficamente el viernes.', correct: false }
          ]
        }
      ],
      8: [
        {
          type: 'classic',
          question: 'En el verso "Sus de nieve transparentes gotas", ¿qué figura retórica destaca al igualar dientes con nieve?',
          exp: 'Es una metáfora pura al sustituir el término real por el evocado a partir de una relación de semejanza [26], [2].',
          options: [
            { text: 'Símil', correct: false },
            { text: 'Metáfora', correct: true },
            { text: 'Metonimia', correct: false },
            { text: 'Aliteración', correct: false }
          ]
        },
        {
          type: 'classic',
          question: 'La expresión "Juró fidelidad a la corona" constituye un ejemplo de:',
          exp: 'Es una metonimia o sinécdoque, al designar la institución (la monarquía/estado) a través del símbolo o la parte (la corona) [26].',
          options: [
            { text: 'Metonimia / Sinécdoque', correct: true },
            { text: 'Hipérbole', correct: false },
            { text: 'Oxímoron', correct: false },
            { text: 'Personificación', correct: false }
          ]
        },
        {
          type: 'multi',
          question: 'Selecciona los versos o expresiones que utilicen SÍMILES o COMPARACIONES:',
          exp: 'El símil establece una comparación explícita utilizando nexos como "como", "cual" o "semejante a".',
          options: [
            { id: 'm1', text: 'Brillaba su mirada como un relámpago en la noche.', correct: true },
            { id: 'm2', text: 'Corría fiero cual torrente desbordado.', correct: true },
            { id: 'm3', text: 'Su voz era dulce como la miel de azahar.', correct: true },
            { id: 'm4', text: 'El manto verde del prado floreció.', correct: false }
          ]
        }
      ],
      9: [
        {
          type: 'classic',
          question: '¿Qué tópico literario invita a gozar de los años de juventud antes de la llegada del invierno de la vejez?',
          exp: 'Carpe diem ("aprovecha el día") exhorta a disfrutar el presente considerando la fugacidad del tiempo [26], [2].',
          options: [
            { text: 'Locus amoenus', correct: false },
            { text: 'Carpe diem', correct: true },
            { text: 'Beatus ille', correct: false },
            { text: 'Ubi sunt', correct: false }
          ]
        },
        {
          type: 'classic',
          question: 'La recreación poética de un prado verde, fuentes cristalinas, brisa suave y arboleda apacible responde al tópico de:',
          exp: 'Locus amoenus ("lugar idílico") describe una naturaleza idealizada propicia para el descanso y el amor [26].',
          options: [
            { text: 'Locus amoenus', correct: true },
            { text: 'Tempus fugit', correct: false },
            { text: 'Beatus ille', correct: false },
            { text: 'Carpe diem', correct: false }
          ]
        },
        {
          type: 'multi',
          question: 'Selecciona los tópicos literarios vinculados a la exaltación de la VIDA RETIRADA y la FUGACIDAD:',
          exp: 'Beatus ille ensalza la vida sencilla del campo ajena a ambiciones y Tempus fugit evoca la rápida marcha del tiempo.',
          options: [
            { id: 'm1', text: 'Beatus ille (Dichoso aquel que lejos de los negocios...)', correct: true },
            { id: 'm2', text: 'Tempus fugit (El tiempo vuela de forma irreparable)', correct: true },
            { id: 'm3', text: 'Ubi sunt (¿Dónde quedaron los grandes señores del pasado?)', correct: true },
            { id: 'm4', text: 'Amor post mortem (Exaltación romántica del amor victorioso tras la muerte)', correct: false }
          ]
        }
      ]
    };
    return data[chapterId] || data[27];
  };

  // ==========================================
  // 4. GENERADORES DE XAFARDERIA (TEMAS 1 AL 9)
  // ==========================================
  const getXafarderia = (chapterId) => {
    const data = {
      1: {
        centerRole: 'LA COMUNICACIÓN',
        title: 'Análisis de Intenciones Comunicativas - Tema 1',
        desc: 'Relaciona cada enunciado adaptado con su función lingüística principal.',
        color: 'bg-duoGreen',
        exp: 'Cada intención se enfoca hacia una parte del esquema comunicativo [1].',
        chars: [{ name: '"¡Qué maravilla de concierto disfrutamos hoy!"' }, { name: '"Guarda silencio y lee las instrucciones"' }, { name: '"La Tierra tarda doce meses en dar la vuelta al Sol"' }],
        slots: [
          { id: 's1', label: 'Función Expresiva', icon: 'fa-heart', relation: 'Centrada en el Emisor (exterioriza emociones)', correct: '"¡Qué maravilla de concierto disfrutamos hoy!"' },
          { id: 's2', label: 'Función Apelativa', icon: 'fa-bullhorn', relation: 'Centrada en el Receptor (emite órdenes o instrucción)', correct: '"Guarda silencio y lee las instrucciones"' },
          { id: 's3', label: 'Función Referencial', icon: 'fa-info-circle', relation: 'Centrada en el Referente (informa objetivamente)', correct: '"La Tierra tarda doce meses en dar la vuelta al Sol"' }
        ]
      },
      2: {
        centerRole: 'ESTRUCTURA DE SINTAGMAS',
        title: 'Análisis Sintagmático Interno - Tema 2',
        desc: 'Clasifica los componentes del Sintagma Nominal "Incluso los arquitectos renacentistas".',
        color: 'bg-duoBlue',
        exp: 'Los sintagmas nominales articulan modificadores prenominales, núcleos sustantivos y complementos [28].',
        chars: [{ name: 'Incluso los' }, { name: 'arquitectos' }, { name: 'renacentistas' }],
        slots: [
          { id: 's1', label: 'Modificadores', icon: 'fa-sliders-h', relation: 'Adverbio de foco y determinante antepuestos', correct: 'Incluso los' },
          { id: 's2', label: 'Núcleo del SN', icon: 'fa-cube', relation: 'Sustantivo principal e indispensable', correct: 'arquitectos' },
          { id: 's3', label: 'Complemento del Nombre', icon: 'fa-tag', relation: 'Sintagma Adjetival que califica al núcleo', correct: 'renacentistas' }
        ]
      },
      3: {
        centerRole: 'LA VOZ VERBAL',
        title: 'Voz y Participación del Sujeto - Tema 3',
        desc: 'Clasifica las oraciones según la implicación del sujeto en la acción expresada.',
        color: 'bg-duoPurple',
        exp: 'La voz activa presenta sujeto agente; la pasiva perifrástica, sujeto paciente con C. Agente; la voz media, sujeto procesual [29].',
        chars: [{ name: '"El temporal sacudió el muelle"' }, { name: '"El muelle fue reparado por los obreros"' }, { name: '"El cristal se quebró con el calor"' }],
        slots: [
          { id: 's1', label: 'Voz Activa', icon: 'fa-user-running', relation: 'El sujeto agente ejecuta activamente la acción', correct: '"El temporal sacudió el muelle"' },
          { id: 's2', label: 'Voz Pasiva Perifrástica', icon: 'fa-hands-bound', relation: 'El sujeto paciente la recibe mediante un C. Agente', correct: '"El muelle fue reparado por los obreros"' },
          { id: 's3', label: 'Voz Media', icon: 'fa-leaf', relation: 'El sujeto experimenta un cambio o proceso involuntario', correct: '"El cristal se quebró con el calor"' }
        ]
      },
      4: {
        centerRole: 'CLASES DE VERBOS',
        title: 'Clasificación de Predicados Verbales - Tema 4',
        desc: 'Clasifica las oraciones según el comportamiento sintáctico del verbo.',
        color: 'bg-duoOrange',
        exp: 'Los verbos oscilan entre la transitividad, la inacusatividad procesual y la función semicopulativa [14], [15].',
        chars: [{ name: '"Marcos guardó los documentos en el cajón"' }, { name: '"Brotaron manantiales en la colina"' }, { name: '"El conferenciante se mostró seguro"' }],
        slots: [
          { id: 's1', label: 'Verbo Transitivo', icon: 'fa-box-open', relation: 'Selecciona sujeto agente y complemento directo', correct: '"Marcos guardó los documentos en el cajón"' },
          { id: 's2', label: 'Verbo Inacusativo', icon: 'fa-snowflake', relation: 'Denota un suceso o cambio involuntario', correct: '"Brotaron manantiales en la colina"' },
          { id: 's3', label: 'Verbo Semicopulativo', icon: 'fa-sync-alt', relation: 'Reduce su carga léxica e introduce atributo', correct: '"El conferenciante se mostró seguro"' }
        ]
      },
      5: {
        centerRole: 'SOCIOLINGÜÍSTICA',
        title: 'Identificación de Variedades Lingüísticas - Tema 5',
        desc: 'Identifica la variedad de la lengua representada en cada enunciado.',
        color: 'bg-duoRed',
        exp: 'Las variedades diatópicas, diafásicas y diastráticas configuran el uso real del idioma [17].',
        chars: [{ name: '"¿Ustedes quieren que les traiga la botana ahorita?"' }, { name: '"El fármaco inhibe la recaptación de serotonina"' }, { name: '"¡Buah, menuda movida nos cayó encima!"' }],
        slots: [
          { id: 's1', label: 'Variedad Diatópica (América)', icon: 'fa-globe-americas', relation: 'Uso de ustedes, diminutivos y léxico regional', correct: '"¿Ustedes quieren que les traiga la botana ahorita?"' },
          { id: 's2', label: 'Variedad Diafásica (Registro Científico)', icon: 'fa-microscope', relation: 'Vocabulario especializado y precisión técnica', correct: '"El fármaco inhibe la recaptación de serotonina"' },
          { id: 's3', label: 'Variedad Diafásica (Registro Coloquial)', icon: 'fa-comments', relation: 'Expresiones coloquiales y espontaneidad oral', correct: '"¡Buah, menuda movida nos cayó encima!"' }
        ]
      },
      6: {
        centerRole: 'PAPELES TEMÁTICOS',
        title: 'Asignación de Roles Semánticos - Tema 6',
        desc: 'Identifica el rol semántico del sintagma indicado en cada estructura oracional.',
        color: 'bg-duoYellow',
        exp: 'Los papeles temáticos asignan significado a los participantes según la semántica del verbo [21].',
        chars: [{ name: '"El terremoto destruyó la cosecha"' }, { name: '"La médica atendió al lesionado"' }, { name: '"El operario cortó el cable con los alicates"' }],
        slots: [
          { id: 's1', label: 'Causa (Fuerza inanimada)', icon: 'fa-bolt', relation: 'Fuerza no voluntaria que desencadena el evento', correct: '"El terremoto destruyó la cosecha"' },
          { id: 's2', label: 'Paciente (Receptor de la acción)', icon: 'fa-user-injured', relation: 'Entidad que sufre la transformación', correct: '"La médica atendió al lesionado"' },
          { id: 's3', label: 'Instrumento (Medio técnico)', icon: 'fa-tools', relation: 'Objeto utilizado para ejecutar la acción verbal', correct: '"El operario cortó el cable con los alicates"' }
        ]
      },
      7: {
        centerRole: 'PREDICADOS Y ARGUMENTOS',
        title: 'Clasificación de Funciones Sintácticas - Tema 7',
        desc: 'Asigna cada complemento oracional a su categoría sintáctica correspondiente.',
        color: 'bg-duoTeal',
        exp: 'Distingue entre complementos exigidos (argumentos) y modificadores opcionales (adjuntos) [24], [8].',
        chars: [{ name: '"La figura pesa cincuenta kilos"' }, { name: '"El embajador residió en Praga"' }, { name: '"Cenaron ensalada tranquilamente el viernes"' }],
        slots: [
          { id: 's1', label: 'Complemento de Medida Argumental', icon: 'fa-balance-scale', relation: 'Argumento exigido de cantidad no sustituible por LO', correct: '"La figura pesa cincuenta kilos"' },
          { id: 's2', label: 'Complemento Locativo Argumental', icon: 'fa-map-marker-alt', relation: 'Lugar en donde exigido por verbo estático', correct: '"El embajador residió en Praga"' },
          { id: 's3', label: 'Complemento Circunstancial (Adjunto)', icon: 'fa-calendar-alt', relation: 'Modificador circunstancial prescindible', correct: '"Cenaron ensalada tranquilamente el viernes"' }
        ]
      },
      8: {
        centerRole: 'FIGURAS RETÓRICAS',
        title: 'Identificación de Recursos Estilísticos - Tema 8',
        desc: 'Asigna el verso o texto poético a la figura retórica correspondiente.',
        color: 'bg-duoPink',
        exp: 'Analiza los procedimientos expresivos de transferencia semántica o repetición [26].',
        chars: [{ name: '"Sus dientes de perlas relucían"' }, { name: '"La corona dictó las nuevas leyes"' }, { name: '"Veloz como el rayo cruzó el prado"' }],
        slots: [
          { id: 's1', label: 'Metáfora', icon: 'fa-feather-alt', relation: 'Identificación entre término real y evocado por semejanza', correct: '"Sus dientes de perlas relucían"' },
          { id: 's2', label: 'Metonimia / Sinécdoque', icon: 'fa-crown', relation: 'Designación de la causa por el efecto o parte por el todo', correct: '"La corona dictó las nuevas leyes"' },
          { id: 's3', label: 'Símil o Comparación', icon: 'fa-equals', relation: 'Comparación explícita mediante el nexo "como"', correct: '"Veloz como el rayo cruzó el prado"' }
        ]
      },
      9: {
        centerRole: 'TÓPICOS LITERARIOS',
        title: 'Análisis de Motivos Clásicos - Tema 9',
        desc: 'Clasifica los fragmentos poéticos según el tópico clásico que vertebran.',
        color: 'bg-duoIndigo',
        exp: 'Los tópicos literarios recrean temas universales consolidados por la tradición [26].',
        chars: [{ name: '"Coge las rosas de tu juventud antes que el tiempo las marchite"' }, { name: '"En este prado ameno de corriente cristalina y sombra apacible"' }, { name: '"Dichoso aquel que retirado del mundanal ruido sigue la escondida senda"' }],
        slots: [
          { id: 's1', label: 'Carpe diem', icon: 'fa-hourglass-half', relation: 'Exhortación al disfrute del presente', correct: '"Coge las rosas de tu juventud antes que el tiempo las marchite"' },
          { id: 's2', label: 'Locus amoenus', icon: 'fa-tree', relation: 'Idealización del paisaje idílico de la naturaleza', correct: '"En este prado ameno de corriente cristalina y sombra apacible"' },
          { id: 's3', label: 'Beatus ille', icon: 'fa-mountain', relation: 'Elogio de la vida sencilla e independiente en el campo', correct: '"Dichoso aquel que retirado del mundanal ruido sigue la escondida senda"' }
        ]
      }
    };
    return data[chapterId] || data[27];
  };

  // ==========================================
  // 5. GENERADORES DE BOE (TEMAS 1 AL 9)
  // ==========================================
  const getBOE = (chapterId) => {
    const data = {
      1: [
        {
          text: 'Entiendo perfectamente lo que planteas... Oye, ¿sigue la conexión en directo?... Esta reunión se termina aquí, ¿de acuerdo?',
          sub: 'Análisis pragmático del lenguaje',
          type: 'fatica',
          exp: 'El propósito principal de estas muletillas e interrupciones es comprobar y mantener abierto el canal de comunicación [1].',
          options: [
            { id: 'fatica', label: 'Función Fática' },
            { id: 'expresiva', label: 'Función Expresiva' }
          ]
        }
      ],
      2: [
        {
          text: 'Regresó cansada (a) vs. Regresó la cansada (b)',
          sub: 'Análisis de recategorización en pares mínimos',
          type: 'recategorizacion',
          exp: 'En (a) "cansada" es un adjetivo calificativo (CPred); en (b) el determinante antepuesto "la" recategoriza la palabra a sustantivo núcleo del Sujeto [30], [31].',
          options: [
            { id: 'recategorizacion', label: 'Recategorización léxica (Adjetivo a Sustantivo por Determinante)' },
            { id: 'ambiguedad', label: 'Ambigüedad sintáctica por adscripción de SPrep' }
          ]
        }
      ],
      3: [
        {
          text: 'Se revisaron los informes en el comité de evaluación.',
          sub: 'Análisis de construcciones con SE',
          type: 'pasiva_refleja',
          exp: 'Es una pasiva refleja: el verbo plural "se revisaron" concuerda perfectamente con el sujeto paciente plural "los informes" [32].',
          options: [
            { id: 'pasiva_refleja', label: 'Pasiva Refleja (SE + Verbo Activo + Sujeto Paciente Plural)' },
            { id: 'se_impersonal', label: 'SE Impersonal (Verbo en Singular sin Sujeto)' }
          ]
        }
      ],
      4: [
        {
          text: 'Amaneció despejado (a) vs. Amaneció en la ciudad (b)',
          sub: 'Análisis sintáctico del comportamiento de amanecer',
          type: 'inacusativo_vs_unipersonal',
          exp: 'En (a) "amanecer" funciona como verbo semicopulativo con atributo; en (b) actúa como verbo unipersonal atmosférico impersonal [13], [15].',
          options: [
            { id: 'inacusativo_vs_unipersonal', label: 'Uso Semicopulativo (a) vs. Uso Unipersonal Atmosférico (b)' },
            { id: 'transitivo', label: 'Transitivo con Complemento Directo' }
          ]
        }
      ],
      5: [
        {
          text: '"Dicen en el barrio que la vecina del quinto se ha comprao un coche fetén."',
          sub: 'Análisis sociolingüístico del discurso',
          type: 'registro_coloquial',
          exp: 'Muestra pérdida de la consonante intervocálica ("comprao"), uso de léxico popular ("fetén") y sintaxis coloquial [6], [18].',
          options: [
            { id: 'registro_coloquial', label: 'Registro Coloquial con rasgos sociolectales' },
            { id: 'registro_tecnico', label: 'Registro Formal Académico' }
          ]
        }
      ],
      6: [
        {
          text: 'La farmacéutica envió las vacunas a los centros sanitarios en transporte refrigerado.',
          sub: 'Análisis de la estructura de roles temáticos',
          type: 'estructura_ditransitiva',
          exp: 'Configura un Agente ("La farmacéutica"), un Tema ("las vacunas"), una Meta ("a los centros sanitarios") y un Medio ("en transporte refrigerado") [21], [7], [33].',
          options: [
            { id: 'estructura_ditransitiva', label: 'Agente + Tema + Meta + Medio' },
            { id: 'estructura_estativa', label: 'Experimentante + Causa + Locativo' }
          ]
        }
      ],
      7: [
        {
          text: 'Laura confía plenamente en las posibilidades de su equipo.',
          sub: 'Análisis de la estructura argumental',
          type: 'crv_argumental',
          exp: '"En las posibilidades" es un CRV exigido por "confiar" ([alguien] confía [en algo]); "plenamente" es un adjunto modal [22], [34].',
          options: [
            { id: 'crv_argumental', label: 'Predicado + Adjunto Modal + Complemento de Régimen Verbal (Argumento)' },
            { id: 'cclugar', label: 'Predicado + Complemento Directo + Complemento Circunstancial de Lugar' }
          ]
        }
      ],
      8: [
        {
          text: 'En el silencio solo se escuchaba un susurro de abejas que sonaba.',
          sub: 'Análisis retórico',
          type: 'aliteracion',
          exp: 'Destaca la aliteración por la repetición sistemática del fonema fricativo /s/ para evocar el zumbido de los insectos [26].',
          options: [
            { id: 'aliteracion', label: 'Aliteración de fonemas /s/' },
            { id: 'anafora', label: 'Anáfora reiterativa' }
          ]
        }
      ],
      9: [
        {
          text: '¿Dónde están las damas, sus vestidos y sus olores? ¿Qué se hizo de aquel trovar cantado?',
          sub: 'Análisis temático clásico',
          type: 'ubi_sunt',
          exp: 'Formula la interrogación retórica del Ubi sunt? ("¿dónde están?"), indagando sobre el destino de los personajes y glorias del pasado [26].',
          options: [
            { id: 'ubi_sunt', label: 'Tópico Ubi sunt?' },
            { id: 'tempus_fugit', label: 'Tópico Tempus fugit' }
          ]
        }
      ]
    };
    return data[chapterId] || data[27];
  };

  // ==========================================
  // 6. GENERADORES DE CONECTA (TEMAS 1 AL 9)
  // ==========================================
  const getConecta = (chapterId) => {
    const data = {
      1: [
        { id: 'c1', left: 'Referencial', right: 'Orientada al Referente o contexto', exp: 'Transmite datos e información del entorno con objetividad [1].' },
        { id: 'c2', left: 'Expresiva', right: 'Orientada al Emisor', exp: 'Exterioriza vivencias, emociones o juicios del hablante [1].' },
        { id: 'c3', left: 'Apelativa', right: 'Orientada al Receptor', exp: 'Pretende condicionar la conducta o respuesta del oyente [1].' },
        { id: 'c4', left: 'Poética', right: 'Orientada a la forma del Mensaje', exp: 'Busca crear un efecto estético o estilístico en el enunciado [1].' }
      ],
      2: [
        { id: 'c1', left: 'Diseñaron el motor de Carlos', right: '"De Carlos" ⟶ Complemento del Nombre (CN)', exp: 'Complementa directamente al sustantivo "motor" [11].' },
        { id: 'c2', left: 'Diseñaron el motor de prisa', right: '"De prisa" ⟶ Complemento Circunstancial de Modo', exp: 'Modifica la forma en que se ejecutó la acción verbal [11].' },
        { id: 'c3', left: 'El viejo sabio', right: '"Viejo" es Sustantivo Núcleo y "sabio" Adjetivo CN', exp: 'El determinante "El" convierte a "viejo" en núcleo sintagmático [35].' },
        { id: 'c4', left: 'El sabio viejo', right: '"Sabio" es Sustantivo Núcleo y "viejo" Adjetivo CN', exp: 'El determinante "El" posiciona a "sabio" como núcleo del sujeto [35].' }
      ],
      3: [
        { id: 'c1', left: 'Unipersonales', right: 'Fenómenos atmosféricos (Nevó, granizó)', exp: 'Carecen de sujeto léxico por la propia naturaleza del verbo [13].' },
        { id: 'c2', left: 'Gramaticalizadas', right: 'Ser / Estar / Hacer / Haber no auxiliares en 3ª sg.', exp: 'Construcciones fijas como "Hubo imprevistos" o "Hace calor" [13].' },
        { id: 'c3', left: 'Eventuales', right: 'Verbo en 3ª plural con agente omitido deliberadamente', exp: 'Se silencia la identidad del agente: "Golpean la puerta con fuerza" [13].' },
        { id: 'c4', left: 'SE Impersonal', right: 'Verbo en 3ª singular con "SE" y CD de persona', exp: 'Estructuras como "Se premió a los ganadores" [13].' }
      ],
      4: [
        { id: 'c1', left: 'Verbo Transitivo', right: 'Exige Sujeto y Complemento Directo (ej: redactar)', exp: 'Selecciona al menos dos argumentos obligatorios [36].' },
        { id: 'c2', left: 'Verbo Inacusativo', right: 'Sujeto no agente que experimenta un cambio (ej: florecer)', exp: 'Permite participios absolutos y sujeto posverbal sin determinante [5].' },
        { id: 'c3', left: 'Verbo Inergativo', right: 'Sujeto agente voluntario e intencional (ej: patinar)', exp: 'Admite adverbios de intencionalidad como "adrede" [5].' },
        { id: 'c4', left: 'Verbo Semicopulativo', right: 'Pérdida de carga léxica que exige atributo (ej: volverse)', exp: 'Une al sujeto con un atributo modificando su estado [15].' }
      ],
      5: [
        { id: 'c1', left: 'Variedad Diatópica', right: 'Diferencias según la zona geográfica (dialectos)', exp: 'Condicionada por factores geográficos e históricos [17].' },
        { id: 'c2', left: 'Variedad Diafásica', right: 'Adaptación al contexto y grado de formalidad (registros)', exp: 'Distingue entre registro formal, coloquial o especializado [17].' },
        { id: 'c3', left: 'Variedad Diastrática', right: 'Nivel sociocultural del hablante (sociolectos)', exp: 'Clasifica los niveles culto, medio o vulgar [17], [37].' },
        { id: 'c4', left: 'Idiolecto', right: 'Forma peculiar de hablar de un individuo concreto', exp: 'Es el uso genuino y personal de la lengua de cada persona [17].' }
      ],
      6: [
        { id: 'c1', left: 'Agente', right: 'Entidad animada que ejecuta voluntariamente la acción', exp: 'Realiza la acción de forma consciente [21].' },
        { id: 'c2', left: 'Causa', right: 'Fuerza inanimada o fenómeno que desencadena el evento', exp: 'Origina el cambio sin intencionalidad voluntaria [21].' },
        { id: 'c3', left: 'Experimentante', right: 'Entidad que percibe o siente un estado psicológico/físico', exp: 'Sufre o experimenta el proceso expresado por el predicado [7].' },
        { id: 'c4', left: 'Locativo', right: 'Espacio o lugar donde se sitúa el evento o estado', exp: 'Indica la localización física de la predicación [33].' }
      ],
      7: [
        { id: 'c1', left: 'Complemento Directo', right: 'Argumento de Tema/Paciente pronominalizable por LO/LA', exp: 'Pasa a sujeto en la transformación a pasiva perifrástica [38].' },
        { id: 'c2', left: 'Complemento de Régimen Verbal', right: 'SPrep argumental exigido por la sintaxis del verbo', exp: 'Conserva la preposición al sustituirse por pronombres neutros ("ello") [22].' },
        { id: 'c3', left: 'Complemento Locativo Argumental', icon: 'fa-map-marker-alt', right: 'SPrep/SAdv de ubicación exigido por verbos estáticos', exp: 'Admite sustitución por "allí" sin preposición [23].' },
        { id: 'c4', left: 'Complemento Predicativo', right: 'Predicado secundario que concuerda con Sujeto o CD', exp: 'Aporta una cualidad u estado en verbos predicativos [39].' }
      ],
      8: [
        { id: 'c1', left: 'Metáfora', right: 'Identificación entre dos términos por semejanza semántica', exp: 'Sustituye o conecta la realidad con una imagen evocada [26].' },
        { id: 'c2', left: 'Metonimia', right: 'Sustitución por relación de contigüidad o causa-efecto', exp: 'Designa el continente por el contenido o la marca por el objeto [26].' },
        { id: 'c3', left: 'Hipérbole', right: 'Exageración desproporcionada del mensaje', exp: 'Aumenta o disminuye en exceso la realidad descrita.' },
        { id: 'c4', left: 'Anáfora', right: 'Repetición de palabras al inicio de versos consecutivos', exp: 'Crea un ritmo enfáctico en la estructuración poética.' }
      ],
      9: [
        { id: 'c1', left: 'Carpe diem', right: 'Aprovecha el día y la juventud presente', exp: 'Exhorta a vivir el momento antes de la vejez [26].' },
        { id: 'c2', left: 'Locus amoenus', right: 'Lugar idílico y apacible en la naturaleza', exp: 'Describe un entorno prístino y placentero [26].' },
        { id: 'c3', left: 'Beatus ille', right: 'Dichoso aquel que vive apartado del mundanal ruido', exp: 'Elogia la vida rústica frente a las ansias urbanas [26].' },
        { id: 'c4', left: 'Tempus fugit', right: 'El tiempo vuela e irrumpe la fugacidad', exp: 'Recuerda lo efímero de la existencia humana [26].' }
      ]
    };
    return data[chapterId] || data[27];
  };

  // ==========================================
  // 7. GENERADORES DE VERITAT (TEMAS 1 AL 9)
  // ==========================================
  const getVeritat = (chapterId) => {
    const data = {
      1: [
        { statement: "El sujeto sintáctico de una oración coincide obligatoriamente con el emisor en el esquema comunicativo.", isTrue: false, exp: "Falso. El sujeto es una unidad sintáctica determinada por la concordancia con el verbo y no equivale al emisor real [1], [4]." },
        { statement: "La función metalingüística del lenguaje opera cuando empleamos el código para examinar el propio código.", isTrue: true, exp: "Verdadero. Ocurre al analizar definiciones, gramática o terminología [1]." }
      ],
      2: [
        { statement: "Un Sintagma Nominal Sujeto en castellano puede llevar una preposición en su inicio.", isTrue: false, exp: "Falso. En la sintaxis del español, el sintagma nominal sujeto NUNCA puede estar encabezado por una preposición [4]." },
        { statement: "En la expresión 'Quiero dos de fresa', el sintagma nominal posee un núcleo sustantivo elidido.", isTrue: true, exp: "Verdadero. El núcleo sustantivo está tácito y se recupera por el contexto ('dos [helados/tartas] de fresa') [28]." }
      ],
      3: [
        { statement: "Hacer la pregunta ¿quién? al verbo constituye la prueba más segura para aislar el sujeto.", isTrue: false, exp: "Falso. Preguntar ¿quién? origina equivocaciones frecuentes. La única prueba sintáctica infalible es la concordancia [40], [4]." },
        { statement: "En la voz media el sujeto experimenta un proceso sin que intervenga una causa o complemento agente directo.", isTrue: true, exp: "Verdadero. Son ejemplos de voz media 'La puerta se cerró' o 'La manzana se pudrió' [29]." }
      ],
      4: [
        { statement: "Los verbos inacusativos admiten la formación de derivados nominales de agente mediante el sufijo -dor.", isTrue: false, exp: "Falso. Los verbos inacusativos carecen de sujeto agente voluntario, por lo que rechazan los derivados en -dor (como de florecer, *florecedor) [5]." },
        { statement: "En los usos absolutos de un verbo transitivo, el complemento directo no aparece explícito pero se sobreentiende por el contexto.", isTrue: true, exp: "Verdadero. Ocurre cuando el contexto pragmático permite elidir el CD sin perder la transitividad latente [14]." }
      ],
      5: [
        { statement: "El seseo consiste en pronunciar la letra 'z' o las sílabas 'ce/ci' con el sonido de la 's', siendo propio del español meridional y americano.", isTrue: true, exp: "Verdadero. Es un rasgo fonético extendido en el andaluz, canario y español de América [19], [20]." },
        { statement: "La jerga y el argot son términos equivalentes que se refieren siempre al nivel vulgar de la lengua.", isTrue: false, exp: "Falso. La jerga se refiere a colectivos profesionales o especializados, mientras que el argot busca la identificación o la opacidad grupal [18], [37]." }
      ],
      6: [
        { statement: "El papel temático de Paciente se asigna a la fuerza inanimada que provoca involuntariamente un cambio de estado.", isTrue: false, exp: "Falso. La fuerza inanimada es la Causa; el Paciente es la entidad que sufre o recibe la acción [21], [7]." },
        { statement: "El rol temático de Instrumento designa el recurso u objeto que un agente utiliza de forma deliberada para realizar la acción.", isTrue: true, exp: "Verdadero. Representa el medio material de ejecución verbal [33]." }
      ],
      7: [
        { statement: "El Complemento de Régimen Verbal (CRV) se puede eliminar de la oración sin resentir su gramaticalidad por ser un complemento adjunto.", isTrue: false, exp: "Falso. El CRV es un argumento exigido por el verbo cuya elipsis genera oraciones agramaticales o altera su significado [22], [34]." },
        { statement: "El Complemento Locativo Argumental (CLocAR) a diferencia del CRV admite la sustitución directa por adverbios de ubicación como 'allí' sin preposición.", isTrue: true, exp: "Verdadero. Verbos estáticos como 'residir' o 'ubicar' seleccionan un CLocAR directo [23]." }
      ],
      8: [
        { statement: "La metonimia opera mediante una relación de semejanza física entre el término real y el término evocado.", isTrue: false, exp: "Falso. La relación de semejanza corresponde a la metáfora; la metonimia se basa en relaciones de contigüidad, parte-todo o causa-efecto [26]." },
        { statement: "La anáfora es un recurso estilístico que consiste en repetir una o varias palabras al comienzo de versos u oraciones consecutivas.", isTrue: true, exp: "Verdadero. Genera énfasis y ritmo rítmico en la poesía [26]." }
      ],
      9: [
        { statement: "El tópico Beatus ille constituye una alabanza a la vida cortesana y a las grandes ambiciones políticas urbanas.", isTrue: false, exp: "Falso. El Beatus ille ('dichoso aquel') ensalza la vida rústica, sencilla y apartada del mundanal ruido [26]." },
        { statement: "El tópico Ubi sunt? formula preguntas retóricas sobre el paradero de grandes personalidades y glorias pasadas caídas en el olvido.", isTrue: true, exp: "Verdadero. Reflexiona sobre la fugacidad de la vida y el poder igualador de la muerte [26]." }
      ]
    };
    return data[chapterId] || data[27];
  };

  // ==========================================
  // 8. GENERADORES DE MOT PERDUT (TEMAS 1 AL 9)
  // ==========================================
  const getMotPerdut = (chapterId) => {
    const data = {
      1: {
        text: "La función del lenguaje enfocada a incidir sobre el oyente se denomina _______, mientras que la orientada a comprobar el estado del soporte de comunicación es la _______.",
        exp: "La función apelativa condiciona al receptor y la fática comprueba el canal [1].",
        blanks: [
          { id: 'b1', answer: 'apelativa', options: ['apelativa', 'referencial', 'poética'] },
          { id: 'b2', answer: 'fática', options: ['fática', 'expresiva', 'metalingüística'] }
        ]
      },
      2: {
        text: "Las agrupaciones sintácticas construidas alrededor de un elemento imprescindible se llaman _______. Cuando un término modifica su categoría gramatical por el contexto ocurre una _______.",
        exp: "Los sintagmas se organizan en torno a un núcleo y pueden experimentar recategorización [10], [30].",
        blanks: [
          { id: 'b1', answer: 'sintagmas', options: ['sintagmas', 'oraciones', 'locuciones'] },
          { id: 'b2', answer: 'recategorización', options: ['recategorización', 'elipsis', 'aposición'] }
        ]
      },
      3: {
        text: "Para determinar con certeza el sujeto sintáctico debemos emplear la prueba de la _______ con el verbo. Cuando una oración no posee sujeto por estructura gramatical se define como _______.",
        exp: "La concordancia establece el sujeto y la inexistencia constitutiva de sujeto produce impersonales [40], [13].",
        blanks: [
          { id: 'b1', answer: 'concordancia', options: ['concordancia', 'pasiva', 'sustitución'] },
          { id: 'b2', answer: 'impersonal', options: ['impersonal', 'pasiva refleja', 'tácita'] }
        ]
      },
      4: {
        text: "Los verbos intransitivos que expresan procesos involuntarios o cambios de estado se clasifican como _______, mientras que los que implican un sujeto agente consciente son _______.",
        exp: "La inacusatividad denota falta de intencionalidad y la inergatividad implica voluntariedad [14], [5].",
        blanks: [
          { id: 'b1', answer: 'inacusativos', options: ['inacusativos', 'inergativos', 'transitivos'] },
          { id: 'b2', answer: 'inergativos', options: ['inergativos', 'copulativos', 'impersonales'] }
        ]
      },
      5: {
        text: "La variedad del lenguaje que se adapta al grado de formalidad de la situación se denomina _______, mientras que la vinculada al nivel sociocultural del hablante es la _______.",
        exp: "La variedad diafásica determina el registro y la diastrática el sociolecto [17].",
        blanks: [
          { id: 'b1', answer: 'diafásica', options: ['diafásica', 'diatópica', 'diacrónica'] },
          { id: 'b2', answer: 'diastrática', options: ['diastrática', 'idiolectal', 'estándar'] }
        ]
      },
      6: {
        text: "El rol semántico atribuido a la persona que experimenta una sensación o estado psicológico se llama _______, mientras que el objeto que recibe la acción verbal es el _______.",
        exp: "El Experimentante siente el proceso y el Paciente/Tema recibe la acción directa [7].",
        blanks: [
          { id: 'b1', answer: 'experimentante', options: ['experimentante', 'agente', 'causa'] },
          { id: 'b2', answer: 'paciente', options: ['paciente', 'instrumento', 'locativo'] }
        ]
      },
      7: {
        text: "Los complementos obligatorios exigidos por la valencia del verbo se denominan _______, mientras que las informaciones circunstanciales opcionales constituyen _______.",
        exp: "Los argumentos son exigidos sintácticamente y los adjuntos son modificadores perimetrales [24].",
        blanks: [
          { id: 'b1', answer: 'argumentos', options: ['argumentos', 'adjuntos', 'atributos'] },
          { id: 'b2', answer: 'adjuntos', options: ['adjuntos', 'argumentos', 'predicados'] }
        ]
      },
      8: {
        text: "El recurso estilístico basado en la identificación de dos términos por semejanza es la _______, mientras que la sustitución por contigüidad espacial o causal es la _______.",
        exp: "La metáfora opera por semejanza y la metonimia por contigüidad o causalidad [26].",
        blanks: [
          { id: 'b1', answer: 'metáfora', options: ['metáfora', 'metonimia', 'aliteración'] },
          { id: 'b2', answer: 'metonimia', options: ['metonimia', 'símil', 'anáfora'] }
        ]
      },
      9: {
        text: "El tópico clásico que anima a disfrutar de los placeres de la juventud se llama _______, mientras que el que evoca una naturaleza apacible e idealizada es el _______.",
        exp: "Carpe diem invita al disfrute del momento y Locus amoenus idealiza el paisaje [26].",
        blanks: [
          { id: 'b1', answer: 'Carpe diem', options: ['Carpe diem', 'Beatus ille', 'Ubi sunt'] },
          { id: 'b2', answer: 'Locus amoenus', options: ['Locus amoenus', 'Tempus fugit', 'Beatus ille'] }
        ]
      }
    };
    return data[chapterId] || data[27];
  };

  // ==========================================
  // 9. MÉTODOS PÚBLICOS DE EXPORTACIÓN
  // ==========================================
  return {
    CHAPTER_DATA,
    getChapter: (id) => CHAPTER_DATA[id] || CHAPTER_DATA[27],
    getTimeline: (chapterId) => timelineData[chapterId] || timelineData[27],
    getKahoot,
    getXafarderia,
    getBOE,
    getConecta,
    getVeritat,
    getMotPerdut
  };

})();