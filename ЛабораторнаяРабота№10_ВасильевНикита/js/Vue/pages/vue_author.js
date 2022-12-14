let app = new Vue({
    el: "#app",
    data: {
        selected_author_login: 'Посты всех авторов',
        author_name: 'none',
        author_login: 'none',
        subscribers: '0',
        signed: '0',
        post_count: '0',
        posts: post_list
    },
    computed:{
        filterPosts: function(){
            let author = this.selected_author_login;

            return this.posts.filter( el => {
                if(author === '' || author === 'Посты всех авторов') {
                    this.author_name = 'Посты всех авторов';
                    this.author_login = 'none';
                    this.subscribers = 0;
                    this.signed = 0;
                    this.post_count = post_list.length;

                    return true;
                }
                else {
                    
                    // сдедал доп проверку , чтобы лишний раз не проходиться по forEach
                    if (el.author === author) {
                        
                        // ищем инфу об авторе
                        list_authors.forEach(it => {

                            if (it.login === el.author) {
                                this.author_name = it.name;
                                this.author_login = it.login;
                                this.subscribers = it.subscribers;
                                this.signed = it.signed;
                                this.post_count = it.post_count;
                            }

                        });
                    }

                    return el.author === author;
                }
            })
        }
    }
});