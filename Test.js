/* Animated Purple Galaxy Theme */

@keyframes galaxyBackground { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }

body { background: linear-gradient(-45deg, #3c419b, #6c63b8, #514a8d, #161519); background-size: 400% 400%; animation: galaxyBackground 15s ease infinite; color: #F4F4F4; font-family: 'ggsans-Normal', sans-serif; }

/* Animated Text Glow */ @keyframes textGlow { 0% { text-shadow: 0 0 5px #fbd1e6, 0 0 10px #d8c28f; } 50% { text-shadow: 0 0 10px #fbd1e6, 0 0 20px #d8c28f; } 100% { text-shadow: 0 0 5px #fbd1e6, 0 0 10px #d8c28f; } }

h1, h2, h3, .title { animation: textGlow 3s ease-in-out infinite alternate; }

/* Button Styling */ button { background-color: #5B539D; border: none; padding: 10px 20px; color: #F4F4F4; font-size: 16px; cursor: pointer; border-radius: 5px; transition: background 0.3s ease, transform 0.2s ease; }

button:hover { background-color: #514a8d; transform: scale(1.05); }

/* Scrollbar Styling */ ::-webkit-scrollbar { width: 8px; }

::-webkit-scrollbar-thumb { background: #5B539D; border-radius: 4px; }

::-webkit-scrollbar-track { background: #29272E; }

