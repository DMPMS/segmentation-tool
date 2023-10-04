# MEDUSAS EYE'S - Ferramenta de Segmentação de Imagens

## 1. Introdução
A Medusas Eyes é uma startup dedicada à resolução de problemas por meio da utilização de visão computacional, aprendizado de máquina, computação em nuvem, entre outras. Este produto consiste em uma ferramenta que proporciona aos usuários uma experiência simplificada para a segmentação de imagens, a qual desempenha um papel crucial na startup.

## 2. Tecnologias Utilizadas
- Linguagem de Programação: TypeScript
- Framework: Next.js
- Bibliotecas: Ant-Design e Moment.js

## 3. Guia de Uso
Inicialmente, a ferramenta é composta por duas telas: a Tela de Submissão de Classes e Imagens e a Tela de Segmentação. Ambas serão explicadas nesta seção.

### 3.1 Tela de Submissão de Classes e Imagens
Nesta tela, o usuário deve fornecer as classes a serem identificadas no processo de segmentação utilizando o campo de entrada de texto. Para inserir o nome de cada classe desejada, o usuário deve digitá-lo e pressionar a tecla "Enter", adicionando-o à lista de classes disponíveis. Isso também pode ser feito através do upload de um arquivo no formato JSON, que contém as classes e até mesmo coordenadas de polígonos previamente segmentados. Para excluir uma classe, basta clicar no ícone "X" no cartão correspondente à classe.

Para carregar as imagens que serão segmentadas, o usuário pode usar a opção de arrastar e soltar (drag and drop) na área designada. Se preferir, também é possível clicar na área para abrir o explorador de arquivos e selecionar as imagens.

Após fornecer as classes e carregar as imagens, o botão "Criar Projeto" será habilitado. O usuário deve clicar nesse botão para ser redirecionado à tela de segmentação.

### 3.2 Tela de Segmentação
Nesta tela, você terá acesso a diversas ferramentas e elementos essenciais para a segmentação das imagens por meio de polígonos. Vale ressaltar que todas as ações que o usuário poderá realizar dependem do estado atual da segmentação. Por exemplo, se o usuário estiver desenhando um novo polígono, as únicas ações permitidas serão desfazer o último ponto desenhado e finalizar o polígono em desenho. Nas subseções futuras, serão descritas todas as ações possíveis relacionadas à segmentação da imagem selecionada, bem como em que momento essas ações podem ou não ser realizadas.

#### 3.2.1 Visualização da Imagem:
A imagem escolhida para segmentação será exibida nesta área. Inicialmente, a primeira imagem submetida na tela anterior será considerada a imagem selecionada. Essa imagem será redimensionada para se ajustar à tela, mantendo sua proporção original para evitar rolagens excessivas. Para alternar entre as imagens, basta selecionar uma das imagens listadas abaixo da imagem atualmente selecionada.

Você pode ampliar e reduzir a imagem para realizar uma segmentação mais precisa. Utilize os botões de zoom disponíveis para ajustar a visualização conforme necessário, sendo eles: "Zoom In" (Aumentar Zoom) e "Zoom Out" (Diminuir Zoom), cada um com seu respectivo ícone padrão (uma lupa). Além disso, também é possível movimentar a imagem através dos botões "Move Up" (Mover para Cima), "Move Down" (Mover para Baixo), "Move Left" (Mover para a Esquerda) e "Move Right" (Mover para a Direita), permitindo movimentos nas direções correspondentes. O ícone de cada botão é uma seta apontando na direção do movimento. É importante observar que essas ações não serão permitidas durante o desenho de um novo polígono na imagem ou enquanto um ponto de um polígono estiver sendo movido.

#### 3.2.2 Seleção de Classes:
Localizada na parte superior esquerda da tela, o usuário encontrará três elementos que pretendem apresentar informações sobre as classes e máscaras da imagem selecionada de diferentes formas. São eles:
 - Um primeiro card, que possui duas abas. A primeira aba exibe as classes segmentadas na imagem e a quantidade correspondente de cada classe. A segunda aba mostra uma lista, onde cada item contém o nome da classe relacionada ao polígono (podendo ser clicado para selecionar o polígono, destacando-o entre os demais na imagem), um botão com um ícone de olho aberto e fechado, indicando se o polígono está visível ou oculto (a ação de ocultar e mostrar é realizada através do clique neste botão), e um ícone de lixeira que permite excluir o polígono.
 - Um segundo card, que possui um campo de seleção onde, por padrão, a primeira classe informada na página anterior estará selecionada. Neste campo, o usuário pode alterar a classe selecionada. A classe selecionada será a atribuída ao polígono a ser desenhado.
 - Um terceiro card, que mostra qual polígono está selecionado no momento, exibindo seu nome, classe e data de criação. Se nenhum polígono estiver selecionado, uma mensagem indicará que nenhum polígono foi selecionado.

#### 3.2.4 Ações de Segmentação:
A direita da interface, pode ser encontrada uma seção destinada aos botões de ações que podem ser executadas antes, durante e depois da segmentação da imagem. Esses botões podem mudar de estado ao decorrer da segmentação. Abaixo, apresentamos a relação de todos os botões presentes:
1. Reverter último ponto do polígono em desenho (Undo Point Click): Reverte o último ponto atribuído ao polígono em desenho, permitindo a correção ou remoção deste ponto durante o desenho do polígono. Esta ação será permitida apenas enquanto um novo polígono está sendo desenhado. Além disso, para que esse botão seja habilitado, o polígono em desenho deve possuir pelo menos um ponto. O botão possui um ícone de retroceder.
2. Excluir ponto selecionado de um polígono (Delete point): Remove os pontos selecionados de um determinado polígono. Após a exclusão dos pontos, se o polígono ficar com menos de três pontos, ele será excluído, visto que um polígono para existir deve possuir pelo menos três pontos. Esta ação será permitida apenas quando pelo menos um ponto de um determinado polígono estiver selecionado. O botão possui um ícone de lixeira.
3. Editar ponto selecionado (Edit Selected Point): Permite a edição precisa de exatamente um ponto selecionado no polígono, possibilitando ajustar um ponto que não tenha ficado muito preciso. Ao clicar neste botão, o usuário poderá clicar na imagem várias vezes para ajustar o ponto até que ele fique conforme desejado. Para finalizar a edição do ponto, basta clicar novamente no botão de editar o ponto selecionado. Esta ação só será habilitada quando exatamente um ponto de um polígono estiver selecionado, visto que não é possível editar um ponto se ele não estiver selecionado, e também não faz sentido colocar dois pontos ou mais em uma mesma posição. O botão possui um ícone de lápis.
4. Iniciar segmentação (Start Segmentation): Inicia o processo de segmentação da imagem, onde o usuário pode começar a marcar as áreas desejadas na imagem, sendo essas áreas cada ponto do polígono em desenho. Esta ação não pode ser realizada enquanto o usuário estiver durante a ação de editar um ponto selecionado. Este botão possui um ícone de "start".
5. Finalizar segmentação (Finish Polygon): Finaliza o processo de segmentação da imagem. Para finalizar, o polígono deve possuir pelo menos 3 pontos, visto que um polígono para existir deve possuir pelo menos três pontos. Esta ação só será habilitada quando o usuário iniciar o processo de segmentação e depois que o polígono possuir pelo menos 3 pontos. O botão possui ícone de pausa.
6. Aumentar zoom (Zoom In): Amplia a imagem para obter uma visualização mais detalhada e precisa. Esta ação não pode ser realizada enquanto um polígono estiver em desenho ou um ponto de um determinado polígono estiver sendo movido. Este botão possui o ícone padrão de aumentar zoom (lupa).
7. Diminuir zoom (Zoom Out): Reduz a imagem para obter uma visualização mais ampla da imagem. Esta ação não pode ser realizada enquanto um polígono estiver em desenho ou um ponto de um determinado polígono estiver sendo movido. Este botão possui o ícone padrão de diminuir zoom (lupa).
8. Mover para cima (Move Up): Desloca a imagem para cima, permitindo a visualização de áreas superiores quando estiver aplicado o zoom. Esta ação só é possível após aproximar o zoom da imagem. Esta ação não pode ser realizada enquanto um polígono estiver em desenho ou um ponto de um determinado polígono estiver sendo movido. Este botão possui o ícone de seta apontando para cima.
9. Mover para baixo (Move Down): Desloca a imagem para baixo, permitindo a visualização de áreas superiores quando estiver aplicado o zoom. Esta ação só é possível após aproximar o zoom da imagem. Esta ação não pode ser realizada enquanto um polígono estiver em desenho ou um ponto de um determinado polígono estiver sendo movido. Este botão possui o ícone de seta apontando para baixo.
10. Mover para a esquerda (Move Left): Desloca a imagem para a esquerda, permitindo a visualização de áreas superiores quando estiver aplicado o zoom. Esta ação só é possível após aproximar o zoom da imagem. Esta ação não pode ser realizada enquanto um polígono estiver em desenho ou um ponto de um determinado polígono estiver sendo movido. Este botão possui o ícone de seta apontando para a esquerda.
11. Mover para a direita (Move Right): Desloca a imagem para a direita, permitindo a visualização de áreas superiores quando estiver aplicado o zoom. Esta ação só é possível após aproximar o zoom da imagem. Esta ação não pode ser realizada enquanto um polígono estiver em desenho ou um ponto de um determinado polígono estiver sendo movido. Este botão possui o ícone de seta apontando para a direita.
12. Deletar polígono selecionado (Delete Selected Polygon): Ao selecionar um polígono, você pode clicar neste botão para deletar o polígono na imagem. Esta ação só pode ser realizada se um polígono estiver selecionado. Esta ação não pode ser realizada enquanto um polígono estiver em desenho ou um ponto de um determinado polígono estiver sendo movido. Este botão possui o ícone de lixeira.
13. Exportar JSON (Export JSON): Permite exportar os dados da segmentação em um arquivo no formato JSON, possibilitando o uso posterior desses dados em outras aplicações ou análises. Este arquivo possui informações como classes segmentadas, coordenadas de cada polígono segmentado e informações sobre as imagens utilizadas.

## 4. JSON Exportado
O arquivo JSON exportado segue o template utilizado pela base COCO, que é amplamente aceito como entrada em algoritmos de aprendizado de máquina destinados ao reconhecimento de objetos. Eis um exemplo deste arquivo JSON, com uma classe, um polígono desenhado, e uma imagem:
```
{
  "annotations": [
    {
      "id_mask": 1,
      "image_id": 0,
      "category_id": 1,
      "segmentation": [[445, 430, 487, 368, 567, 429, 487, 478]],
      "bbox": [478, 567, 368, 445]
    }
  ],
  "images": [
    {
      "id": 0,
      "file_name": "6-4_bmp.rf.178f31723774a0716e35c90c2a5dc59c.jpg",
      "url": "blob:http://localhost:3000/47403ff9-db24-47c1-8f15-893344d43499",
      "height": 886,
      "width": 930
    }
  ],
  "categories": [{ "id": 1, "name": "Alita" }]
}
``` 
- ```annotations```: Trata-se de um conjunto que contém as anotações (polígonos) das imagens. No exemplo, encontra-se apenas uma anotação dentro desse conjunto.
  - ```id_mask```: Identificador da máscara (polígono), com o valor igual a 1 no exemplo.
  - ```image_id```: Identificador da imagem associada à anotação, com valor é igual a 0 no exemplo.
  - ```category_id```: Identificador da categoria (classe) à qual a anotação pertence, cujo valor é igual a 1 no exemplo.
  - ```segmentation```: Uma lista que contém outra lista, a qual armazena as coordenadas da segmentação da anotação. No exemplo, existe apenas um conjunto de coordenadas representado por uma lista que contém outra lista com os pares de valores x e y: [[445, 430, 487, 368, 567, 429, 487, 478]]. Observando que o primeiro item dessa lista é representado pelo índice 0, é importante notar que todos os índices pares representam os valores de x, enquanto os ímpares representam os valores de y.
  - ```bbox```: Esta matriz representa a caixa delimitadora (bounding box) da anotação, especificando as coordenadas x e y do ponto superior esquerdo e as dimensões da caixa. No exemplo, a caixa delimitadora é [478, 567, 368, 445].

- ```images```: Trata-se de um array que contém informações sobre as imagens associadas às anotações.
  - ```id```: Identificador da imagem, com o valor igual a 0 no exemplo.
  - ```file_name```: Nome do arquivo da imagem, que é "6-4_bmp.rf.178f31723774a0716e35c90c2a5dc59c.jpg" no exemplo.
  - ```url```: URL da imagem, apontando para "blob:http://localhost:3000/47403ff9-db24-47c1-8f15-893344d43499".
  - ```height```: Altura da imagem em pixels, com o valor igual a 886 no exemplo.
  - ```width```: Largura da imagem em pixels, com o valor igual a 930 no exemplo.

- ```categories```: É um array que contém informações sobre as categorias das anotações.
  - ```id```: Identificador da categoria, com o valor igual a 1 no  exemplo.
  - ```name```: Nome da categoria, que é "Alita" no exemplo.

## 5. Agradecimentos
Os autores expressam agradecimentos pelo apoio financeiro da Universidade Federal do Ceará, concedido por meio do Programa Institucional de Bolsas de Iniciação Científica, e pela orientação da Professora Doutora Rosineide Fernando da Paz neste trabalho.
