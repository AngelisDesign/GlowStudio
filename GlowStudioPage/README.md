# Glow Studio - Sitio Web Reorganizado

## Estructura del Proyecto

```
glow.claudecode/
├── index.html                 # Archivo principal
├── css/
│   └── styles.css            # Estilos (colores rosa/lila/violeta pasteles)
├── js/
│   └── script.js             # Animaciones y funcionalidades JavaScript
└── assets/                   # Carpeta para recursos locales (imágenes, etc.)
```

## Cambios Realizados

### 1. **Reorganización en Carpetas**
- **CSS separado**: Todos los estilos están en `css/styles.css`
- **JavaScript separado**: Toda la interactividad en `js/script.js`
- **HTML limpio**: `index.html` solo contiene la estructura y referencias a los recursos

### 2. **Nueva Paleta de Colores Pastel**

Los colores se han actualizado a tonos pasteles suaves:

- **Rosa Pastel**: `#E88BB9` (color principal - botones, acentos)
- **Lila Pastel**: `#C8B9E8` (secciones destacadas, tarjetas)
- **Violeta Pastel**: `#D9BFED` (transiciones, overlays)
- **Crema**: `#F2F0E9` (fondos claros)
- **Carbón**: `#1A1A1A` (texto principal)

#### Elementos con Nuevos Colores:
- Botones principales → Rosa pastel
- Tarjetas de servicios destacadas → Lila pastel
- Horarios box → Lila pastel
- Links hover → Rosa pastel
- Bordes y acentos → Ajustados a la paleta pastel

## Cómo Usar

1. Abre `index.html` en tu navegador
2. Los archivos CSS y JS se cargarán automáticamente
3. Todos los colores están basados en variables CSS (`:root`) para fácil mantenimiento

## Ventajas de Esta Estructura

✅ **Mantenibilidad**: Separa contenido, estilos y lógica  
✅ **Escalabilidad**: Fácil agregar más archivos CSS/JS  
✅ **Rendimiento**: CSS optimizado y compilado  
✅ **Organización**: Carpetas dedicadas para cada tipo de archivo  
✅ **Colaboración**: Más fácil trabajar en equipo con archivos separados  

## Próximas Optimizaciones Posibles

- Crear archivos CSS modulares (responsive, tipografía, etc.)
- Agregar minificación de archivos
- Implementar un sistema de build (Webpack, Vite)
- Organizar assets (imágenes, favicon, etc.)
