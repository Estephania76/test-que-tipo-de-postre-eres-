const app = Vue.createApp({
    data() {
        return {
            nombre: '',
            comenzar: true, 
            testIniciado: false,
            testTerminado: false, 
            respuestas: {}, 
            resultado: '', 
            resultadoDescripcion: '', 
            resultadoImagen: '',
            preguntas: [
                {
                    texto: "¿Cuál es tu sabor favorito?",
                    opciones: [
                        { texto: "Chocolate", valor: "Tiramisú" },
                        { texto: "Frutas frescas", valor: "Pastel de queso" },
                        { texto: "Dulce de leche o caramelo", valor: "Brownie" },
                        { texto: "Frutas con un toque cremoso", valor: "Helado de Fresa" }
                    ]
                },
                {
                    texto: "¿Cómo describirías tu personalidad?",
                    opciones: [
                        { texto: "Sofisticada y detallista", valor: "Tiramisú" },
                        { texto: "Alegre y dulce", valor: "Pastel de queso" },
                        { texto: "Intensa y fuerte", valor: "Brownie" },
                        { texto: "Fresca y llena de energía", valor: "Helado de Fresa" }
                    ]
                },
                {
                    texto: "¿Qué prefieres hacer en tu tiempo libre?",
                    opciones: [
                        { texto: "Ir a un buen restaurante o café", valor: "Tiramisú" },
                        { texto: "Pasar tiempo con amigos o familia", valor: "Pastel de queso" },
                        { texto: "Disfrutar de una buena serie o película", valor: "Brownie" },
                        { texto: "Bailar o hacer algo al aire libre", valor: "Helado de Fresa" }
                    ]
                },
                {
                    texto: "Si fueras un emoji, ¿cuál serías?",
                    opciones: [
                        { texto: "😌",valor: "Tiramisú" },
                        { texto: "😊", valor: "Pastel de queso" },
                        { texto: "😎", valor: "Brownie" },
                        { texto: "🌞", valor: "Helado de Fresa" }
                    ]
                },
                {
                    texto: "¿Qué tipo de película es tu favorita?",
                    opciones: [
                        { texto: "Drama o arte independiente", valor: "Tiramisú" },
                        { texto: "Comedia romántica", valor: "Pastel de queso" },
                        { texto: "Suspenso o misterio", valor: "Brownie" },
                        { texto: "Aventura o musical", valor: "Helado de Fresa" }
                    ]
                },
                {
                    texto: "¿Cómo te ves en una cita ideal?",
                    opciones: [
                        { texto: "Un café o postre en un lugar bonito", valor: "Tiramisú" },
                        { texto: "Un picnic o paseo", valor: "Pastel de queso" },
                        { texto: "Películas y mucha conversación", valor: "Brownie" },
                        { texto: "Algo espontáneo y activo, como bailar o un concierto", valor: "Helado de Fresa" }
                    ]
                }
            ],
            descripciones: {
                "Tiramisú": "Eres elegante y sofisticado/a, siempre tienes un toque especial.",
                "Pastel de queso": "Dulce y confiable, eres el amigo/a que todos buscan.",
                "Brownie": "Intenso/a y profundo/a, prefieres las conexiones sinceras.",
                "Helado de Fresa": "Alegre y vibrante, amas la aventura y lo espontáneo.",
            }
        };
    },
    methods: {
        iniciarTest() {
            this.testIniciado = true;
            this.respuestas = {}; 
        },
        calcularResultado() {
            const conteos = {}; 
            Object.values(this.respuestas).forEach(respuesta => {
                conteos[respuesta] = (conteos[respuesta] || 0) + 1;
            });
            this.resultado = Object.keys(conteos).reduce((a, b) => conteos[a] > conteos[b] ? a : b);
            this.resultadoDescripcion = this.descripciones[this.resultado];
            this.testTerminado = true;
        },
        reiniciar() {
            this.nombre = '';
            this.comenzar = true;
            this.testIniciado = false;
            this.testTerminado = false;
            this.respuestas = {};
            this.resultado = '';
            this.resultadoDescripcion = '';
        }
    }
});
app.mount('#app');


