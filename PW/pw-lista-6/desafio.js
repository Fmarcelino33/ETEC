<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Galeria Interativa</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

  <!-- 1. Header com Titulo e Menu Horizontal -->
  <header class="header">
    <h1>Galeria de Fotos</h1>
    <nav>
      <ul class="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">Sobre</a></li>
        <li><a href="#">Contato</a></li>
      </ul>
    </nav>
  </header>

  <div class="container">
    <!-- 1 & 3. Galeria principal (Float Left) -->
    <section class="galeria">
      
      <!-- Coluna 1 -->
      <div class="coluna">
        <div class="card-imagem">
          <img src="https://picsum.photos/300/200?random=1" alt="Imagem 1">
          <div class="legenda">Paisagem Natural 1</div>
        </div>
        <div class="card-imagem">
          <img src="https://picsum.photos/300/200?random=2" alt="Imagem 2">
          <div class="legenda">Paisagem Natural 2</div>
        </div>
        <div class="card-imagem">
          <img src="https://picsum.photos/300/200?random=3" alt="Imagem 3">
          <div class="legenda">Paisagem Natural 3</div>
        </div>
      </div>

      <!-- Coluna 2 -->
      <div class="coluna">
        <div class="card-imagem">
          <img src="https://picsum.photos/300/200?random=4" alt="Imagem 4">
          <div class="legenda">Arquitetura Urb 1</div>
        </div>
        <div class="card-imagem">
          <img src="https://picsum.photos/300/200?random=5" alt="Imagem 5">
          <div class="legenda">Arquitetura Urb 2</div>
        </div>
        <div class="card-imagem">
          <img src="https://picsum.photos/300/200?random=6" alt="Imagem 6">
          <div class="legenda">Arquitetura Urb 3</div>
        </div>
      </div>

      <!-- Coluna 3 -->
      <div class="coluna">
        <div class="card-imagem">
          <img src="https://picsum.photos/300/200?random=7" alt="Imagem 7">
          <div class="legenda">Retratos / Arte 1</div>
        </div>
        <div class="card-imagem">
          <img src="https://picsum.photos/300/200?random=8" alt="Imagem 8">
          <div class="legenda">Retratos / Arte 2</div>
        </div>
        <div class="card-imagem">
          <img src="https://picsum.photos/300/200?random=9" alt="Imagem 9">
          <div class="legenda">Retratos / Arte 3</div>
        </div>
      </div>

    </section>

    <!-- 1 & 3. Barra Lateral (Float Right) -->
    <aside class="sidebar">
      <h3>Categorias</h3>
      <ul>
        <li><a href="#">Natureza</a></li>
        <li><a href="#">Arquitetura</a></li>
        <li><a href="#">Arte Urbana</a></li>
        <li><a href="#">Fotografia P&B</a></li>
      </ul>
      <br>
      <h3>Sobre a Galeria</h3>
      <p>Projeto de galeria responsiva desenvolvida em HTML5 e CSS puro aplicando Box Model, Display e Float.</p>
    </aside>

    <!-- Limpeza dos floats dentro do container -->
    <div class="clear"></div>
  </div>

  <!-- 1. Rodape -->
  <footer class="footer">
    <p>&copy; 2026 Galeria Interativa - Todos os direitos reservados.</p>
    <p>Siga-nos: <a href="#">Instagram</a> | <a href="#">GitHub</a></p>
  </footer>

</body>
</html>