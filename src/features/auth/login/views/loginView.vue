<style>
/* NUEVOS ESTILOS MODERNOS PARA LOGIN */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: #181e29;
    min-height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: auto;
}

.login-container {
    min-height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #181e29;
    position: relative;
    z-index: 2;
    padding: 0;
}

.login-card {
    background: #ffffff;
    border-radius: 16px;
    padding: 48px 40px;
    box-shadow: 
        0 4px 6px -1px rgba(0, 0, 0, 0.1),
        0 2px 4px -1px rgba(0, 0, 0, 0.06);
    border: 1px solid #e5e7eb;
    position: relative;
    max-width: 420px;
    width: 100%;
}

.header {
    text-align: center;
    margin-bottom: 40px;
}

.title {
    font-size: 2.25rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 8px;
    letter-spacing: -0.025em;
}

.subtitle {
    color: #6b7280;
    font-size: 1rem;
    font-weight: 400;
}

.login-form {
    display: flex;
    flex-direction: column;
    gap: 24px;
}

.input-group {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.input-label {
    font-size: 0.875rem;
    font-weight: 600;
    color: #374151;
    margin-left: 2px;
}

.input-field {
    width: 100%;
    padding: 16px 16px;
    border: 1.5px solid #d1d5db;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 400;
    background: #ffffff;
    transition: all 0.2s ease;
    outline: none;
    color: #1f2937;
}

.input-field:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.input-field::placeholder {
    color: #9ca3af;
}

.password-container {
    position: relative;
}

.toggle-password {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    cursor: pointer;
    color: #6b7280;
    padding: 8px;
    border-radius: 6px;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
}

.toggle-password:hover {
    color: #374151;
    background: #f3f4f6;
}

.eye-icon {
    width: 20px;
    height: 20px;
}

.form-options {
    display: flex;
    justify-content: flex-end;
    margin-top: -8px;
}

.forgot-password {
    color: #3b82f6;
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 500;
    transition: all 0.2s ease;
    padding: 6px 8px;
    border-radius: 6px;
}

.forgot-password:hover {
    color: #2563eb;
    background: rgba(59, 130, 246, 0.05);
}

.login-button {
    width: 100%;
    padding: 16px 24px;
    background: #1f2937;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    position: relative;
    overflow: hidden;
    margin-top: 8px;
}

.login-button:hover {
    background: #111827;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.login-button:active {
    transform: translateY(0);
}

.arrow-icon {
    transition: transform 0.2s ease;
}

.login-button:hover .arrow-icon {
    transform: translateX(2px);
}

.register-link {
    text-align: center;
    font-size: 0.875rem;
    color: #6b7280;
    margin-top: 16px;
}

.register-button {
    color: #3b82f6;
    text-decoration: none;
    font-weight: 600;
    margin-left: 4px;
    transition: all 0.2s ease;
    padding: 2px 6px;
    border-radius: 4px;
}

.register-button:hover {
    color: #2563eb;
    background: rgba(59, 130, 246, 0.05);
}

.background-decoration {
    display: none;
}

@media (max-width: 480px) {
    .login-container {
        padding: 16px;
    }
    .login-card {
        padding: 40px 32px;
        border-radius: 12px;
    }
    .title {
        font-size: 2rem;
    }
    .input-field {
        padding: 14px 16px;
        font-size: 16px;
    }
    .login-button {
        padding: 14px 20px;
    }
}

@media (max-height: 700px) {
    .login-card {
        padding: 36px 40px;
    }
    .login-form {
        gap: 20px;
    }
    .header {
        margin-bottom: 32px;
    }
}

@media (prefers-color-scheme: dark) {
    body {
        background: #0f172a;
    }
    .login-card {
        background: #1e293b;
        border: 1px solid #334155;
    }
    .title {
        color: #f1f5f9;
    }
    .subtitle {
        color: #94a3b8;
    }
    .input-label {
        color: #fff; /* Cambiado a blanco puro para mayor contraste */
        font-weight: 700; /* Más negrita */
        text-shadow: 0 1px 2px rgba(0,0,0,0.08); /* Sutil sombra para resaltar */
    }
    .input-field {
        background: #334155;
        border-color: #475569;
        color: #f1f5f9;
    }
    .input-field:focus {
        border-color: #3b82f6;
        background: #334155;
    }
    .register-link {
        color: #94a3b8;
    }
    .login-button {
        background: #3b82f6;
    }
    .login-button:hover {
        background: #2563eb;
    }
}

.login-button.loading {
    pointer-events: none;
    opacity: 0.8;
}

.login-button.loading span {
    opacity: 0;
}

.login-button.loading::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border: 2px solid transparent;
    border-top-color: #ffffff;
    border-radius: 50%;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.login-button:focus-visible,
.forgot-password:focus-visible,
.register-button:focus-visible {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
}

.input-field:focus-visible {
    outline: none;
}

* {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

@media (prefers-contrast: high) {
    .login-card {
        border: 2px solid #000000;
    }
    .input-field {
        border-width: 2px;
    }
    .login-button {
        background: #000000;
    }
}

.input-field.error {
    border-color: #ef4444;
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.1);
}

.input-field.error:focus {
    border-color: #ef4444;
    box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.2);
}

.login-button {
    position: relative;
    overflow: hidden;
}

.ripple {
    position: absolute;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.3);
    transform: scale(0);
    animation: ripple 0.6s linear;
    pointer-events: none;
}

@keyframes ripple {
    to {
        transform: scale(4);
        opacity: 0;
    }
}
</style>

<script setup>
import { Icon } from '@iconify/vue';
// ...aquí puedes agregar lógica para mostrar/ocultar contraseña si lo deseas...
</script>

<template>
  <div class="login-container">
    <div class="login-card">
      <div class="header">
        <p class="title">BitWave</p>
        <p class="subtitle">Te da la bienvenida</p>
      </div>
      <form class="login-form">
        <div class="input-group">
          <label for="username" class="input-label">Usuario</label>
          <input type="text" name="username" id="username" placeholder="Ingresa tu correo o usuario" class="input-field">
        </div>
        <div class="input-group">
          <label for="password" class="input-label">Contraseña</label>
          <div class="password-container">
            <input type="password" name="password" id="password" placeholder="Ingresa tu contraseña" class="input-field">
            <button type="button" class="toggle-password" aria-label="Toggle password visibility">
              <Icon icon="mdi:eye" width="24" height="24" style="color: #000" class="eye-icon" />
            </button>
          </div>
        </div>
        <div class="form-options">
          <a rel="noopener noreferrer" href="#" class="forgot-password">¿Olvidaste tu contraseña?</a>
        </div>
        <button class="login-button">
          Iniciar sesión
          <span class="arrow-icon" aria-hidden="true">→</span>
        </button>
      </form>
      <p class="register-link">¿No tienes una cuenta?
        <a rel="noopener noreferrer" href="#" class="register-button">Regístrate</a>
      </p>
    </div>
  </div>
</template>
