const fs = require('fs');
const path = require('path');

// Lista de objetos contendo palavras-chave e descrições
const itens = [
  {
    titulo: "Cestas de Café da Manhã em Angra dos Reis",
    descricao: "Surpreenda com cestas de café da manhã artesanais em Angra dos Reis. Entrega rápida e personalizada para momentos especiais."
  },
  {
    titulo: "Cestas de Presente em Angra dos Reis",
    descricao: "Encontre cestas de presente personalizadas em Angra dos Reis. Uma maneira única de surpreender quem você ama."
  },
  {
    titulo: "Entrega de Cestas em Angra dos Reis",
    descricao: "Oferecemos entrega rápida e segura de cestas em Angra dos Reis para qualquer ocasião especial."
  },
  {
      "titulo": "Cestas para Presente em Angra dos Reis", 
      "descricao": "Encontre as melhores opções de cestas para presente em Angra dos Reis. Surpreenda com cestas personalizadas para qualquer ocasião, como aniversários, datas especiais e celebrações. Aqui você encontra qualidade e carinho."
  },
  {
      "titulo": "Cesta de Café da Manhã em Angra dos Reis", 
      "descricao": "Desperte o dia com uma cesta de café da manhã em Angra dos Reis. Cestas repletas de delícias frescas e produtos de qualidade para tornar a manhã mais saborosa e acolhedora."
  },
  {
      "titulo": "Cesta de Natal em Angra dos Reis", 
      "descricao": "Celebre o Natal com cestas exclusivas de Angra dos Reis. Presentes com itens gourmet, chocolates e muito mais para um final de ano inesquecível. A escolha perfeita para surpreender quem você ama."
  },
  {
      "titulo": "Cesta de Dia das Mães em Angra dos Reis", 
      "descricao": "Neste Dia das Mães, presenteie com uma cesta encantadora em Angra dos Reis. Opções personalizadas com itens especiais para celebrar esse dia único e fazer sua mãe se sentir especial."
  },
  {
      "titulo": "Presente de Dia das Mães em Angra dos Reis", 
      "descricao": "Neste Dia das Mães, presenteie com uma cesta encantadora em Angra dos Reis. Opções personalizadas com itens especiais para celebrar esse dia único e fazer sua mãe se sentir especial."
  },
  {
      "titulo": "Cesta de Dia dos Namorados em Angra dos Reis", 
      "descricao": "Surpreenda seu amor no Dia dos Namorados com uma cesta personalizada em Angra dos Reis. Uma seleção de chocolates, flores e presentes românticos para comemorar o amor."
  },
  {
      "titulo": "Cesta de Páscoa em Angra dos Reis", 
      "descricao": "Celebre a Páscoa em Angra dos Reis com cestas recheadas de chocolates, ovos e doces finos. Um presente doce e perfeito para a data."
  },
  {
      "titulo": "Cesta de Aniversário em Angra dos Reis", 
      "descricao": "Comemore aniversários de forma especial em Angra dos Reis com cestas personalizadas. Recheadas de delícias e presentes que encantam e agradam a todos."
  },
  {
      "titulo": "Cesta para Noivado em Angra dos Reis", 
      "descricao": "Comemore o noivado com uma cesta única em Angra dos Reis. Uma opção romântica e sofisticada para marcar esse momento especial."
  },
  {
      "titulo": "Cesta de Formatura em Angra dos Reis", 
      "descricao": "Celebre a conquista da formatura com uma cesta personalizada em Angra dos Reis. Presentes que simbolizam a dedicação e o esforço de quem concluiu essa etapa importante."
  },
  {
      "titulo": "Cesta Gourmet em Angra dos Reis", 
      "descricao": "Para quem aprecia o melhor da gastronomia, oferecemos cestas gourmet em Angra dos Reis. Combinando os melhores produtos e sabores para um presente sofisticado e de bom gosto."
  },
  {
      "titulo": "Cesta para Dia dos Pais em Angra dos Reis", 
      "descricao": "Neste Dia dos Pais, surpreenda com uma cesta recheada de itens especiais em Angra dos Reis. Uma forma única de demonstrar carinho e reconhecimento."
  },
  {
      "titulo": "Cesta de Ação de Graças em Angra dos Reis", 
      "descricao": "Celebre o Dia de Ação de Graças com uma cesta recheada de sabores deliciosos em Angra dos Reis. O presente perfeito para agradecer e compartilhar momentos especiais."
  },
  {
      "titulo": "Cesta para Casamento em Angra dos Reis", 
      "descricao": "Presenteie os noivos com uma cesta especial em Angra dos Reis. Um presente que une sofisticação e carinho para esse momento inesquecível."
  },
  {
      "titulo": "Cesta de Fim de Ano em Angra dos Reis", 
      "descricao": "Comemore o fim de ano com uma cesta cheia de surpresas e delícias em Angra dos Reis. O presente perfeito para renovar os votos de felicidade e amor."
  },
  {
      "titulo": "Cesta de Chocolate em Angra dos Reis", 
      "descricao": "Encante com cestas recheadas de chocolates de alta qualidade em Angra dos Reis. O presente ideal para agradar quem ama doces."
  },
  {
      "titulo": "Cesta de Produtos Regionais em Angra dos Reis", 
      "descricao": "Ofereça um presente com o melhor de Angra dos Reis. Cestas com produtos locais e artesanais para valorizar o que é da região."
  },
  {
      "titulo": "Cesta com Flores em Angra dos Reis", 
      "descricao": "A beleza das flores unida ao sabor de uma cesta deliciosa. Cestas com flores frescas e encantadoras em Angra dos Reis para todas as ocasiões."
  },
  {
      "titulo": "Cesta de Queijos e Vinhos em Angra dos Reis", 
      "descricao": "Presenteie com elegância e sofisticação. Cestas de queijos e vinhos finos em Angra dos Reis, perfeitas para quem aprecia o bom gosto."
  },
  {
      "titulo": "Cesta de Café da Tarde em Angra dos Reis", 
      "descricao": "Transforme a tarde em um momento especial com uma cesta repleta de delícias para o café da tarde em Angra dos Reis. Um presente aconchegante e cheio de sabor."
  },
  {
      "titulo": "Cesta de Gratidão em Angra dos Reis", 
      "descricao": "Demonstre seu carinho e gratidão com uma cesta cheia de surpresas em Angra dos Reis. O presente ideal para expressar agradecimento e apreço."
  },
  {
      "titulo": "Cesta de Bem-Estar em Angra dos Reis", 
      "descricao": "Presenteie com uma cesta que promove bem-estar em Angra dos Reis. Itens de cuidados pessoais, produtos relaxantes e muito mais para quem busca momentos de tranquilidade."
  },
  {
      "titulo": "Cesta de Chá em Angra dos Reis", 
      "descricao": "Ofereça uma cesta encantadora com chá e outros produtos deliciosos em Angra dos Reis. Ideal para quem ama momentos de relaxamento e sabor."
  },
  {
      "titulo": "Cesta de Bem-Vindo em Angra dos Reis", 
      "descricao": "Acolha com carinho quem chegou em Angra dos Reis com uma cesta de boas-vindas repleta de mimos e delícias para tornar a estadia mais agradável."
  },{
    "titulo": "Cesta de Chá de Bebê em Angra dos Reis", 
    "descricao": "Comemore o chá de bebê com uma cesta personalizada em Angra dos Reis. Cestas com itens adoráveis e úteis para o novo membro da família, uma surpresa carinhosa para os pais."
},
{
    "titulo": "Cesta de Boas-Vindas para Casa Nova em Angra dos Reis", 
    "descricao": "Ofereça uma cesta de boas-vindas para quem acabou de se mudar para Angra dos Reis. Com itens úteis e acolhedores, a cesta perfeita para tornar o novo lar ainda mais especial."
},
{
    "titulo": "Cesta de Páscoa em Angra dos Reis", 
    "descricao": "Presentes especiais para as crianças na Páscoa em Angra dos Reis. Cestas recheadas de chocolates e brinquedos, para tornar a data ainda mais divertida e doce."
},
{
    "titulo": "Cesta de Páscoa Infantil em Angra dos Reis", 
    "descricao": "Presentes especiais para as crianças na Páscoa em Angra dos Reis. Cestas recheadas de chocolates e brinquedos, para tornar a data ainda mais divertida e doce."
},
{
    "titulo": "Cesta de Bem-Estar e Relaxamento em Angra dos Reis", 
    "descricao": "Proporcione momentos de relaxamento e bem-estar com uma cesta personalizada em Angra dos Reis. Itens de spa, velas aromáticas e outros produtos para cuidar do corpo e da mente."
},
{
    "titulo": "Cesta de Chocolate e Flores em Angra dos Reis", 
    "descricao": "Encante com uma cesta que combina chocolates finos e flores frescas em Angra dos Reis. O presente ideal para todas as ocasiões românticas e comemorativas."
},
{
    "titulo": "Cesta de Dia dos Avós em Angra dos Reis", 
    "descricao": "Neste Dia dos Avós, presenteie com uma cesta cheia de carinho em Angra dos Reis. Produtos especiais para agradar e demonstrar todo o amor e cuidado aos avós."
},
{
    "titulo": "Cesta de Boas-Vindas Empresarial em Angra dos Reis", 
    "descricao": "Surpreenda novos clientes ou parceiros comerciais com uma cesta de boas-vindas empresarial em Angra dos Reis. Cestas elegantes e sofisticadas para mostrar seu apreço e fazer uma boa primeira impressão."
},
{
    "titulo": "Cesta de Recuperação em Angra dos Reis", 
    "descricao": "Apoie quem está em recuperação com uma cesta de produtos saudáveis e reconfortantes em Angra dos Reis. Itens que ajudam na recuperação e trazem conforto durante o processo."
},
{
    "titulo": "Cesta de Gratidão Corporativa em Angra dos Reis", 
    "descricao": "Demonstre sua gratidão a funcionários e colaboradores com uma cesta corporativa em Angra dos Reis. Um presente atencioso para reconhecer o empenho e dedicação no ambiente de trabalho."
},
{
    "titulo": "Cesta de Presentes de Luxo em Angra dos Reis", 
    "descricao": "Presenteie com sofisticação com uma cesta de luxo em Angra dos Reis. Cestas com produtos exclusivos e de alta qualidade, ideais para ocasiões especiais e pessoas especiais."
},
{
    "titulo": "Cesta de Presente em Angra dos Reis", 
    "descricao": "Presenteie com sofisticação com uma cesta de luxo em Angra dos Reis. Cestas com produtos exclusivos e de alta qualidade, ideais para ocasiões especiais e pessoas especiais."
},
{
    "titulo": "Cesta de Produtos para Crianças em Angra dos Reis", 
    "descricao": "Presenteie as crianças com uma cesta cheia de brinquedos, livros e guloseimas em Angra dos Reis. Uma opção divertida e encantadora para o Dia das Crianças ou qualquer outra data comemorativa."
},
{
    "titulo": "Cesta de Dia Internacional da Mulher em Angra dos Reis", 
    "descricao": "Comemore o Dia Internacional da Mulher com uma cesta recheada de itens que celebram a beleza e força feminina em Angra dos Reis. Um presente único e cheio de significado."
},
{
    "titulo": "Cesta de Romance e Relaxamento em Angra dos Reis", 
    "descricao": "Crie momentos especiais com uma cesta romântica e relaxante em Angra dos Reis. Cestas com produtos para um jantar a dois, velas aromáticas e itens de cuidado pessoal."
},
{
    "titulo": "Cesta de Natal para Empresas em Angra dos Reis", 
    "descricao": "Surpreenda seus colaboradores com uma cesta de Natal personalizada para empresas em Angra dos Reis. Um presente elegante e cheio de espírito natalino."
},
{
    "titulo": "Cesta de Presentes para Amigo Secreta em Angra dos Reis", 
    "descricao": "Participe da brincadeira de amigo secreto com uma cesta divertida e criativa em Angra dos Reis. Opções variadas de presentes que agradam a todos os gostos."
},
{
    "titulo": "Cesta de Presentes para Amiga Secreta em Angra dos Reis", 
    "descricao": "Participe da brincadeira de amigo secreto com uma cesta divertida e criativa em Angra dos Reis. Opções variadas de presentes que agradam a todos os gostos."
},
{
    "titulo": "Cesta de Presentes para Chefes em Angra dos Reis", 
    "descricao": "Demonstre respeito e consideração ao seu chefe com uma cesta sofisticada em Angra dos Reis. Um presente corporativo perfeito para ocasiões especiais e datas comemorativas."
},
{
    "titulo": "Cesta de Homenagem em Angra dos Reis", 
    "descricao": "Preste uma linda homenagem com uma cesta personalizada em Angra dos Reis. Uma forma única de expressar carinho e reconhecimento."
},    {"titulo": "Cesta Artesanal para Presentes em Angra dos Reis", 
    "descricao": "Descubra cestas artesanais personalizadas para presentes em Angra dos Reis. Cestas feitas à mão com cuidado, perfeitas para surpreender em qualquer ocasião especial."},
   
   {"titulo": "Cesta Artesanal de Café da Manhã em Angra dos Reis", 
    "descricao": "Acorde com uma cesta artesanal de café da manhã em Angra dos Reis. Itens frescos e feitos à mão para começar o dia de forma especial e saborosa."},
   
   {"titulo": "Cesta Artesanal de Natal em Angra dos Reis", 
    "descricao": "Celebre o Natal de forma única com uma cesta artesanal em Angra dos Reis. Presentes especiais feitos à mão, com carinho e atenção para as festividades de fim de ano."},
   
   {"titulo": "Cesta Artesanal de Dia das Mães em Angra dos Reis", 
    "descricao": "No Dia das Mães, surpreenda com uma cesta artesanal em Angra dos Reis. Feita com amor e com itens que encantam, a cesta perfeita para a sua mãe se sentir especial."},
   
   {"titulo": "Cesta Artesanal de Dia dos Namorados em Angra dos Reis", 
    "descricao": "Neste Dia dos Namorados, escolha uma cesta artesanal em Angra dos Reis. Presentes feitos à mão, que demonstram carinho e atenção para quem você ama."},
   
   {"titulo": "Cesta Artesanal de Páscoa em Angra dos Reis", 
    "descricao": "Presenteie com uma cesta artesanal de Páscoa em Angra dos Reis. Itens feitos à mão, recheados de chocolates, doces e muito carinho para a celebração."},
   
   {"titulo": "Cesta Artesanal de Aniversário em Angra dos Reis", 
    "descricao": "Comemore aniversários com uma cesta artesanal em Angra dos Reis. Personalizada e feita com carinho, a cesta ideal para presentear quem você ama."},
   
   {"titulo": "Cesta Artesanal de Chá de Bebê em Angra dos Reis", 
    "descricao": "Comemore o chá de bebê com uma cesta artesanal em Angra dos Reis. Itens feitos à mão e cuidadosamente selecionados para os pais e o novo bebê."},
   
   {"titulo": "Cesta Artesanal de Boas-Vindas em Angra dos Reis", 
    "descricao": "Surpreenda com uma cesta artesanal de boas-vindas em Angra dos Reis. Cestas feitas à mão com itens acolhedores para quem acabou de chegar à cidade."},
   
   {"titulo": "Cesta Artesanal para Casamento em Angra dos Reis", 
    "descricao": "Celebre o amor com uma cesta artesanal para casamento em Angra dos Reis. Feita à mão, com itens exclusivos e de bom gosto para os noivos."},
   
   {"titulo": "Cesta Artesanal de Produtos Gourmet em Angra dos Reis", 
    "descricao": "Desfrute de uma seleção de produtos gourmet com uma cesta artesanal em Angra dos Reis. Itens exclusivos feitos à mão, perfeitos para quem aprecia o sabor da alta gastronomia."},
   
   {"titulo": "Cesta Artesanal de Produtos Regionais em Angra dos Reis", 
    "descricao": "Aprecie os sabores regionais com uma cesta artesanal em Angra dos Reis. Produtos locais feitos à mão, para quem ama a cultura e gastronomia da região."},
   
   {"titulo": "Cesta Artesanal de Bem-Estar em Angra dos Reis", 
    "descricao": "Proporcione momentos de bem-estar com uma cesta artesanal em Angra dos Reis. Itens feitos à mão para relaxamento e autocuidado, perfeitos para quem busca equilíbrio."},
   
   {"titulo": "Cesta Artesanal de Dia dos Avós em Angra dos Reis", 
    "descricao": "Neste Dia dos Avós, presenteie com uma cesta artesanal em Angra dos Reis. Feita com carinho, ideal para demonstrar amor e gratidão aos avós."},
   
   {"titulo": "Cesta Artesanal de Homenagem em Angra dos Reis", 
    "descricao": "Preste uma linda homenagem com uma cesta artesanal em Angra dos Reis. Itens feitos à mão, que encantam e mostram todo o seu carinho."},
   
   {"titulo": "Cesta Artesanal de Recuperação em Angra dos Reis", 
    "descricao": "Apoie a recuperação de um amigo ou familiar com uma cesta artesanal em Angra dos Reis. Itens feitos à mão para trazer conforto e carinho durante o processo de recuperação."},
   
   {"titulo": "Cesta Artesanal para Chefes em Angra dos Reis", 
    "descricao": "Demonstre sua apreciação com uma cesta artesanal para chefes em Angra dos Reis. Uma cesta feita à mão, ideal para presentear um chefe ou mentor."},
   
   {"titulo": "Cesta Artesanal de Doces em Angra dos Reis", 
    "descricao": "Delicie-se com uma cesta artesanal de doces em Angra dos Reis. Cestas feitas à mão com os melhores doces caseiros, para presentear ou saborear com os amigos e familiares."},
   
   {"titulo": "Cesta Artesanal de Chocolates Finos em Angra dos Reis", 
    "descricao": "Encante com uma cesta artesanal de chocolates finos em Angra dos Reis. Produtos exclusivos, feitos à mão, para os amantes de chocolate de alta qualidade."},
   
   {"titulo": "Cesta Artesanal de Lingerie em Angra dos Reis", 
    "descricao": "Para um presente íntimo e sofisticado, escolha uma cesta artesanal de lingerie em Angra dos Reis. Feita com delicadeza, é a opção ideal para ocasiões especiais."},
   
   {"titulo": "Cesta Artesanal de Relaxamento e Spa em Angra dos Reis", 
    "descricao": "Proporcione momentos de relaxamento com uma cesta artesanal de spa em Angra dos Reis. Itens feitos à mão, perfeitos para um dia de autocuidado e bem-estar."},
   
   {"titulo": "Cesta Artesanal para Festas em Angra dos Reis", 
    "descricao": "Decore e presenteie com uma cesta artesanal para festas em Angra dos Reis. Feita à mão, ela traz personalidade e charme para qualquer celebração."}
];

// Pasta de saída
const outputDir = './keywords';
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Função para gerar slug/permalink
function slugify(texto) {
  return texto.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // remove acentos
    .replace(/[^a-z0-9\s]/g, '') // remove caracteres especiais
    .replace(/\s+/g, '-') // troca espaço por hífen
    .replace(/-+/g, '-'); // remove hífens duplicados
}

// Gerar arquivos
itens.forEach(item => {
  const slug = slugify(item.titulo);
  const content = `---
title: "${item.titulo}"
description: "${item.descricao}"
layout: "home.html"
permalink: "/${slug}/"
---`;

  const filename = path.join(outputDir, `${slug}.md`);
  
  // Escreve ou sobrescreve o arquivo
  fs.writeFileSync(filename, content, 'utf8');
  console.log(`Arquivo criado ou sobrescrito: ${filename}`);
});