<template>
  <Card
    class="login-card"
    style="
      max-width: 28rem;
      background: #e5e7eb;
      border: 1px solid #9ca3af;
      border-radius: 0.5rem;
      box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      justify-content: center;"
  >
    <template #header>
      <div
        class="login-header"
        :style="{
          background: blueGradient,
          color: 'white',
          padding: '0.5rem 0',
          textAlign: 'center',
          borderRadius: '0.375rem 0.375rem 0 0'
        }"
      >
        <h1 style="margin:0;font-size:2rem;font-weight:bold;line-height:2rem;">Sign In</h1>
      </div>
    </template>

    <template #content>
      <div style="display:flex;flex-direction:column;gap:0.75rem;padding:0.75rem;">
        <div style="display:flex;flex-direction:column;">
          <InputText
            v-model="username"
            type="text"
            placeholder="Username"
            class="login-input"
            style="width:100%;padding:0.25rem 0.75rem;border:1px solid #9ca3af;border-radius:0.5rem;text-align:center;color:#333;font-size:1.15rem;line-height:1.15rem;font-weight:500;"
          />
        </div>
        <div style="display:flex;flex-direction:column;">
          <Password
            v-model="password"
            placeholder="Password"
            :feedback="false"
            :toggleMask="false"
            inputClass="login-input"
            :inputStyle="{width:'100%',padding:'0.25rem 0.75rem',border:'1px solid #9ca3af',borderRadius:'0.5rem',textAlign:'center',color:'#333',fontSize:'1.15rem',lineHeight:'1.15rem',fontWeight:'500'}"
          />
        </div>
        <div style="display:flex;flex-direction:column;">
          <Button
            label="Login"
            class="login-button"
            :style="{background: blueGradient, border: 'none', width: '100%', borderRadius: '0.5rem', padding: '0.375rem 0', color: 'white', fontSize: '1.3rem', fontWeight: 600, lineHeight: '1.5rem'}"
          />
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup>
import { ref } from 'vue';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import Card from 'primevue/card';
import { useTheme } from '@/composables/useTheme.js';

const { isDark } = useTheme();
const username = ref("");
const password = ref("");
const blueGradient = 'radial-gradient(circle, rgba(30,58,138,1) 35%, rgba(10,31,68,1) 100%)';
</script>

<style scoped>
:deep(.login-card) {
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #e5e7eb;
  border: 1px solid #9ca3af;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  overflow: hidden;
}

:deep(.login-card .p-card-header) {
  padding: 0;
  margin: 0;
  border-bottom: none;
}

.login-header {
  color: white;
  padding: 0.5rem 0;
  text-align: center;
  border-radius: 0.375rem 0.375rem 0 0;
}

.login-header h1 {
  margin: 0;
  font-size: 2rem;
  font-weight: bold;
  line-height: 2rem;
}

:deep(.login-card .p-card-content) {
  padding: 0.75rem;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.field {
  display: flex;
  flex-direction: column;
}

:deep(.login-input) {
  width: 100%;
  padding: 0.25rem 0.75rem;
  border: 1px solid #9ca3af;
  border-radius: 0.5rem;
  text-align: center;
  color: #333;
  font-size: 1.15rem;
  line-height: 1.15rem;
  font-weight: 500;
}

:deep(.login-input:focus) {
  outline: none;
  border-color: #d3d3d3;
  box-shadow: 0 0 0 2px #d3d3d3;
}

:deep(.p-password .login-input:focus) {
  box-shadow: 0 0 0 1px #d3d3d3;
}

:deep(.login-button) {
  width: 100%;
  background: #0a1f44;
  border: 1px solid #0a1f44;
  border-radius: 0.5rem;
  padding: 0.375rem 0;
  color: white;
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 1.5rem;
}

:deep(.login-button:hover) {
  background: #1e3a8a;
  border-color: #1e3a8a;
}

:deep(.login-button:focus) {
  box-shadow: 0 0 0 2px rgba(30, 58, 138, 0.5);
}
</style>
