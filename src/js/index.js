const botoesCarrossel = document.querySelectorAll('.botao');
const images = document.querySelectorAll('.imagem');

botoesCarrossel.forEach((botao, indice) => {
	botao.addEventListener('click', () => {
		const imagemAtual = document.querySelector('.ativa');
		const botaoAtual = document.querySelector('.selecionado');

		botaoAtual.classList.remove('selecionado');
		imagemAtual.classList.remove('ativa');
        
		images[indice].classList.add('ativa');
		botoesCarrossel[indice].classList.add('selecionado');
	});
});
