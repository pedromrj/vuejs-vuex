import Vuex from 'vuex'
import Vue from 'vue';
import http from '@/http';

Vue.use(Vuex);

const state = {
    token: localStorage.getItem('token') || '',
    usuario: {}
}

const mutations = {
    DEFINIR_USUARIO_LOGADO(state, { token , usuario }) {
        state.usuario = usuario
        state.token = token
    },
    DESLOGAR_USUARIO(state) {
        state.token = null,
        state.usuario = {}
    }
}

const actions = {
    efetuarLogin({ commit }, usuario) {
        return new Promise((resolve, reject) => {
            http.post('auth/login', usuario)
                .then(response => {
                    console.log(state);
                    commit('DEFINIR_USUARIO_LOGADO', {
                        token: response.data.access_token,
                        usuario: response.data.user
                    })
                    localStorage.setItem('token', response.data.access_token)
                    resolve(response.data)
                })
                .catch(err => {
                    console.log(err)
                    reject(err);
                })
        })
    }
}

const getters = {
    usuarioEstaLogado: state => Boolean(state.token)
}

export default new Vuex.Store({
    estado: state,
    actions,
    mutations,
    getters
});
