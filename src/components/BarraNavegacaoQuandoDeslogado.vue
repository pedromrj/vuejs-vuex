<template>
    <ul class="navbar-nav mr-auto">
        <li class="nav-item">
        <router-link class="nav-link" :to="{name : 'login'}">Login</router-link>
        </li>
        <li class="nav-item">
        <router-link :to="{name : 'novo.usuario'}" class="nav-link">
            Registre-se
        </router-link>
        </li>
    </ul>
</template>
