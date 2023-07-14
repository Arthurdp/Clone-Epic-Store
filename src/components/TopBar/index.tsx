import { Container } from "./styles";

export default function TopBar() {
    return (
        <>
            <Container>
                <div className="navigation">
                    <div className="div-logo">
                        <a id="logo"></a>
                    </div>
                    <a><p>Store</p></a>
                    <a><p>Distribuição</p></a>
                    <a><p>Ajuda</p></a>
                    <a><p>Unreal Engine</p></a>
                </div>
                <div className="connection">
                    <span>icone</span>
                    <a>
                        <span>icone</span>
                        <span>Entrar</span>
                    </a>
                    <span>Baixar Epic Games</span>
                </div>
            </Container>
        </>
    )
}