var acervo = [{"titulo": "1984", "autor": "George Owell"}
			,{"titulo": "Capitães de Areia", "autor": "Jorge Amado"}
			,{"titulo": "Brás Cubas", "autor": "Machado de Assis"}
			,{"titulo": "O Auto da Compadecida", "autor": "Suassuna"}];

$(function() {
	loadAcervo();

	$("#adicionar").click(onAdicionarClick);

	$("#livrosLidos").on("click", ".icone", onIconeClick);
});

function loadAcervo() {
	$.each(acervo, function(indice, livro) {
		$("#livrosLidos")
			.append($("<tr />")
				.append($("<td/ >").text(livro.titulo))
				.append($("<td />").text(livro.autor))
				.append($("<td />")
					.append($("<img />")
					.addClass("icone")
					.attr("src", "./img/lixo.png"))));
	});
}

function onAdicionarClick() {

		$("#livrosLidos")
			.append($("<tr />")
				.append($("<td/ >").text($("#livro").val()))
				.append($("<td />").text($("#autor").val()))
				.append($("<td />")
					.append($("<img />")
					.addClass("icone")
					.attr("src", "./img/lixo.png"))));
}

function onIconeClick() {
	$(this).parents("tr").remove();
}