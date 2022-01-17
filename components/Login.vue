<template>
    <div class="d-flex flex-grow-1 cyan lighten-5" style="border: solid">
        <v-container fill-height class="d-flex flex-column align-center justify-center">
            <div class="col-12 d-flex flex-column justify-center align-center">
                <v-card class="col-12 col-md-4 d-flex flex-column rounded-lg elevation-3 pa-8">
                    <div class="d-flex flex-column">
                        <div class="d-flex flex-column justify-center align-center text-h4">
                            <div>
                                <span class="font-weight-black cyan--text ml-2">i</span>
                                <span class="font-weight-light cyan--text">- PUSTANDA</span>
                            </div>
                        </div>
                        <div class="d-flex justify-center mt-1">
                            <span class="text-caption grey--text  font-weight-light">Selamat datang di aplikasi Inventori PUSTANDA.</span>
                        </div>
                    </div>
                    <v-divider class="my-3 mb-5"></v-divider>
                    <v-form
                        ref="form"
                        v-model="valid"
                        lazy-validation
                        @submit.prevent="submitForm"
                    >
                        <v-text-field
                            v-model="username"
                            name="username"
                            label="username"
                            prepend-inner-icon="perm_identity"
                            :rules="usernameRules"
                            type="text"
                            outlined
                            dense
                            required
                            class="pa-0 ma-0"
                        ></v-text-field>
                        <v-text-field
                            v-model="password"
                            name="password"
                            label="password"
                            prepend-inner-icon="lock"
                            :append-icon="passwordShow ? 'visibility' : 'visibility_off'"
                            :rules="passwordRules"
                            :type="passwordShow ? 'text' : 'password'"
                            outlined
                            dense
                            required
                            @click:append="passwordShow = !passwordShow"
                            class="pa-0 ma-0"
                        ></v-text-field>
                    </v-form>
                    <v-divider class="mb-5"></v-divider>
                    <div class="d-flex">
                        <v-btn :loading="loading" block color="cyan" class="white--text" @click="submit()">Masuk</v-btn>
                    </div>
                </v-card>
                <div class="mt-5">
                    <span class="text-caption text-center font-weight-light grey--text text-capitalize">Pusat penguatan dan pemberdayaan bahasa. CopyRight @ {{ (new Date()).getFullYear() }}</span>
                </div>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {
    data() {
        return {
            loading: false,
            passwordShow: false,
            valid: false,
            username: '',
            usernameRules: [
                v => !!v || 'Username wajib di isi',
            ],
            password: '',
            passwordRules: [
                v => !!v || 'Password wajib di isi',
            ],
        }
    },
    methods: {
        submit() {
            if (this.$refs.form.validate()) {
                this.loading = true
                setTimeout(() => {
                    this.loading = false
                    this.$router.push('/dashboard')
                }, 2000);
            }
        }
    }
}
</script>

<style>
    .v-text-field--outlined .v-label, .v-input__slot {
        font-size: 14px;
    }

    .v-text-field--outlined .v-icon {
        font-size: 18px;
    }
</style>