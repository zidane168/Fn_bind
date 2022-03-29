const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const app = ( () => {
    const games = ['Conqueror blade'];

    const root = $('#root');
    const input = $('#name');
    const submit = $('#add');

    return {
        add (game) {
            games.push(game);
        },

        delete(index) {
            games.splice(index, 1);
        },

        render() {
            const html = games.map(function(game, index) {
                return `
                    <li> ${game} 
                        <span class="delete" data-index=${index}> &times </span>
                    </li>
                `;
            });

            root.innerHTML = html.join('');
        },
        handleDelete(e) {
            console.log(e.target);      //<span class="delete" data-index="0">
            const deleteBtn = e.target.closest('.delete');   // dùng closet để khi nêu click vào các thẻ con vẫn co thể get dc
            
            if (deleteBtn) {
                console.log(deleteBtn);

                const index = deleteBtn.dataset.index //get data-index from span 
                this.delete(index);
                this.render();
            }
        },

        init() {
            submit.onclick = () => {    // dung arrow function de co the su dung dc this
                const game = input.value;
                this.add(game); 
                this.render();

                input.value = null
                input.focus()
            }

            // delegate 
            root.onclick = this.handleDelete.bind(this);   // cái chỗ cần click
            // nếu ko dùng cái trên mỗi lần render thêm phần tử
            // cần phải addEventListner lai tốn công, nên mình dùng root.onlcick

            this.render();
        }
    }

} )();


app.init();