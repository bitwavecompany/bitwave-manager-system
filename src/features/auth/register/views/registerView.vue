<template>
  <div class="login-container flex min-h-screen w-screen items-center justify-center bg-[#181e29] dark:bg-[#0f172a]">
    <div class="login-card bg-white dark:bg-[#1e293b] border border-gray-200 dark:border-[#334155] rounded-2xl md:rounded-xl shadow-lg p-12 md:p-10 max-w-md w-full relative z-10">
      <div class="header text-center mb-10 md:mb-8">
        <p class="title text-4xl font-bold text-gray-800 dark:text-slate-100 mb-2 tracking-tight">BitWave</p>
        <p class="subtitle text-gray-500 dark:text-slate-400 text-base font-normal">Registrate y registra tu empresa para empezar</p>
      </div>
      <form class="login-form flex flex-col gap-6 md:gap-6" @submit.prevent="handleRegister">
        <div class="input-group flex flex-col gap-2">
          <label for="company_name" class="input-label text-sm font-semibold text-gray-700 dark:text-white dark:font-bold ml-1">Nombre de tu empresa</label>
          <input type="text" name="company_name" id="company_name" placeholder="Ej: Mi Empresa" v-model="companyName" class="input-field w-full px-4 py-4 md:py-4 border border-gray-300 dark:border-[#475569] rounded-lg text-base font-normal bg-white dark:bg-[#334155] text-gray-800 dark:text-slate-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-500 placeholder-gray-400 dark:placeholder-slate-400 transition-all outline-none" />
        </div>
        <div class="input-group flex flex-col gap-2">
          <label for="name" class="input-label text-sm font-semibold text-gray-700 dark:text-white dark:font-bold ml-1">Tu Nombre y Apellido</label>
          <input type="text" name="name" id="name" placeholder="Ej: Juan Pérez" v-model="name" class="input-field w-full px-4 py-4 md:py-4 border border-gray-300 dark:border-[#475569] rounded-lg text-base font-normal bg-white dark:bg-[#334155] text-gray-800 dark:text-slate-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-500 placeholder-gray-400 dark:placeholder-slate-400 transition-all outline-none" />
        </div>
        <div class="input-group flex flex-col gap-2">
          <label for="username" class="input-label text-sm font-semibold text-gray-700 dark:text-white dark:font-bold ml-1">Tu Correo Electrónico</label>
          <input type="text" name="username" id="username" placeholder="Ingresa tu correo o usuario" v-model="email" class="input-field w-full px-4 py-4 md:py-4 border border-gray-300 dark:border-[#475569] rounded-lg text-base font-normal bg-white dark:bg-[#334155] text-gray-800 dark:text-slate-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-500 placeholder-gray-400 dark:placeholder-slate-400 transition-all outline-none" />
        </div>
        <div class="input-group flex flex-col gap-2">
          <label for="password" class="input-label text-sm font-semibold text-gray-700 dark:text-white dark:font-bold ml-1">Contraseña</label>
          <div class="password-container relative">
            <input :type="showPassword ? 'text' : 'password'" name="password" id="password" placeholder="Ingresa tu contraseña" v-model="password" class="input-field w-full px-4 py-4 md:py-4 border border-gray-300 dark:border-[#475569] rounded-lg text-base font-normal bg-white dark:bg-[#334155] text-gray-800 dark:text-slate-100 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 dark:focus:ring-blue-500 placeholder-gray-400 dark:placeholder-slate-400 transition-all outline-none" />
            <button type="button" @click="togglePassword" class="toggle-password absolute right-3 top-1/2 -translate-y-1/2 bg-transparent border-none cursor-pointer text-gray-400 hover:text-gray-700 dark:hover:bg-slate-100/10 p-2 rounded-md flex items-center justify-center transition-colors" aria-label="Toggle password visibility">
              <Icon v-if="!showPassword" icon="mdi:eye" width="24" height="24" style="color: #000" class="eye-icon" />
              <Icon v-else icon="mdi:eye-off" width="24" height="24" style="color: #000" class="eye-icon" />
            </button>
          </div>
        </div>
        <button
          class="login-button w-full py-4 px-6 bg-gray-900 dark:bg-blue-600 text-white rounded-lg text-base font-semibold flex items-center justify-center gap-2 relative overflow-hidden mt-2 hover:bg-gray-800 dark:hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 transition-all focus-visible:outline focus-visible:outline-blue-500 disabled:opacity-80 disabled:pointer-events-none"
          type="submit"
        >
          <span v-for="r in ripples" :key="r.id"
            class="pointer-events-none absolute bg-white/30 rounded-full z-10"
            :style="{
              width: r.diameter + 'px',
              height: r.diameter + 'px',
              left: r.x + 'px',
              top: r.y + 'px',
              animation: 'ripple 0.6s linear',
            }"
          ></span>
          <span v-if="!loading" class="arrow-icon transition-transform">→</span>
          <span v-else class="flex items-center justify-center"><Icon icon="mdi:loading" class="animate-spin" width="22" height="22" /></span>
          Registrarse
        </button>
        <p v-if="errorMsg" class="error-message text-red-500 text-sm mt-2">{{ errorMsg }}</p>
        <ul v-if="errorList.length" class="text-red-500 text-xs mt-1 pl-4 list-disc">
          <li v-for="(err, i) in errorList" :key="i">{{ err }}</li>
        </ul>
      </form>
      <p class="register-link text-center text-sm text-gray-500 dark:text-slate-400 mt-4">¿Ya tienes una cuenta?
        <a rel="noopener noreferrer" href="#" class="register-button text-blue-500 font-semibold ml-1 px-2 py-1 rounded transition-colors focus-visible:outline focus-visible:outline-blue-500" @click.prevent="router.push('/login')">Inicia Sesión</a>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { ref } from 'vue';
import { register } from '../services/registerService';
import { useToast } from 'vue-toastification';
import { useRouter } from 'vue-router';

interface Ripple {
  id: number;
  x: number;
  y: number;
  diameter: number;
}

const loading = ref(false);
const ripples = ref<Ripple[]>([]);
const showPassword = ref(false);
const email = ref('');
const password = ref('');
const companyName = ref('');
const name = ref('');

const errorMsg = ref('');
const errorList = ref<string[]>([]);
const toast = useToast();
const router = useRouter();

async function handleRegister(e: Event) {
  errorMsg.value = '';
  errorList.value = [];
  loading.value = true;
  try {
    const response = await register({
      company_name: companyName.value,
      name: name.value,
      email: email.value,
      password: password.value,
      company_logo_url: null,
      company_phone: null,
      company_email_contact: null,
      company_map_embed_url: null
    });
    // Aquí puedes guardar el token, redirigir, etc.
    console.log('Registro exitoso:', response);
    toast.success('Registro exitoso');
    // Redirigir al login o dashboard si lo deseas
  } catch (error: any) {
    const data = error.response?.data;
    errorMsg.value = data?.message || 'Error al registrar';
    toast.error(errorMsg.value);
    if (data?.errors) {
      errorList.value = Object.values(data.errors).flatMap((v: unknown) => typeof v === 'string' ? v : String(v));
    }
  } finally {
    loading.value = false;
  }
}

function createRipple(e: MouseEvent) {
  const button = e.currentTarget as HTMLElement;
  const rect = button.getBoundingClientRect();
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;
  const x = e.clientX - rect.left - radius;
  const y = e.clientY - rect.top - radius;
  const id = Date.now() + Math.random();
  ripples.value.push({ id, x, y, diameter });
  setTimeout(() => {
    ripples.value = ripples.value.filter(r => r.id !== id);
  }, 600);
}

function togglePassword() {
  showPassword.value = !showPassword.value;
}
</script>

<style scoped>
@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
</style>