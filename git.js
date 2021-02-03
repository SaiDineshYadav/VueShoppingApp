Vue.prototype.$axios = axios;

Vue.component('github-user-card', {
    template: '#github-user-card-template',
    data() {
        return {
            gitUsersList: [],
        }
    },
    props: {
        name: String,  
    },  
    created() {
        axios.get(`https://api.github.com/users`).then(res => {
            if (res['status'] == 200) {
                this.gitUsersList = res['data'];
            console.log(this.gitUsersList);

            }
        })
    }
});
