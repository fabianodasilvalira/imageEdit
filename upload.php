<?php

$imagemRedacao = ($_POST['file']) ?? "";

if ($imagemRedacao != "") {

    $img = explode(',', $imagemRedacao);
    // echo $img[1];
    $data = base64_decode($img[1]);
    $nome_imagem = md5(date("d/m/Y H:i:s")) . ".png";
    $caminho = $nome_imagem;

    file_put_contents($nome_imagem, $data);

    move_uploaded_file($nome_imagem, $caminho);
} else {
    if ($_FILES['upl']['type'] == 'application/pdf') {
        $extension = ".pdf";
        $nome_imagem = $_FILES['upl']['tmp_name'];
        $caminho = md5(date("d/m/Y H:i:s")) . '.' . $extension;
        move_uploaded_file($nome_imagem, $caminho);
        var_dump(($_FILES));
    }
}
