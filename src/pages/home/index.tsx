// Styles
import { Container } from "@/styles/Global";
import { Text } from "@/styles/Text";
import { Button } from "@/styles/Buttons";

// Components
import { Stack } from "@/components/Stack";
import { Project } from "@/components/Project";

// Data
import { stackData } from "@/utils/stackData";
import { userData } from "@/utils/userData";

// Page Style
import {
  Header,
  HeaderContent,
  HeaderButtonsArea,
  StackSection,
  StackCards,
  ProjectsArea,
  ProjectsAreaSocialMediaMessage,
  ProjectsAreaContent,
  ProjectAreaWrapperColumns,
} from "./style";


export const Home = (): JSX.Element => {
  return (
    <main>
      <Header>
        <Container>
          <HeaderContent>
            <Text as="h1" type="heading1" color="grey5">
            Desenvolvedora WEB FullStack FrontEnd & BackEnd 
            </Text>
            <Text as="h4" type="heading2" color="grey1">
            Criando experiências por meio da tecnologia{" "}
            </Text>
          
            <HeaderButtonsArea>
               <Button as="a" href="#projetos">
                Ver projetos
              </Button>

            </HeaderButtonsArea>
          </HeaderContent>
        </Container>
      </Header>
      <StackSection id="tecnologias">
        <Container>
          <Text as="h4" type="heading3" color="grey1">
            Ferramentas que domino
          </Text>
          <StackCards>
            {stackData.map((stack, index) => (
              <Stack key={index} title={stack.title} icon={stack.img} />
            ))}
          </StackCards>
        </Container>
      </StackSection>
      <ProjectsArea id="projetos">
        <Container>
          <ProjectAreaWrapperColumns>
            <ProjectsAreaSocialMediaMessage>
              <Text as="h2" type="heading4" color="grey1">
                Quem sou eu:
              </Text>
              <Text type="body1" color="grey1">
              Designer em transição de carreira, graduada pela Universidade Estadual Paulista (Unesp).
              Ao estudar sobre UX/UI me interressei pelo código. Como estudante da Kenzie Academy desenvolvi
              diversos projetos de alto nível, com sprints e entregas em maioria semanais, evolui muito no último ano. Com dedicação me mantenho em constante aprendizado para progredir e estar sempre atualizada.
            </Text>

            <Text as="h2" type="heading4" color="grey1">
                Vamos trocar uma ideia?
              </Text>
        
              <Button
                type="primary"
                target="_blank"
                as="a"
                href={`https://www.linkedin.com/in/${userData.linkedinUser}`}
              >
                Acessar perfil no LinkedIn
              </Button>
              <Text as="h2" type="heading4" color="grey1">
                Email:
              </Text>
              <Text as="h2" type="body1" color="grey1">
              gabigfontoura@gmail.com
              </Text>
            </ProjectsAreaSocialMediaMessage>
            <ProjectsAreaContent>
              <Text  type="heading2" color="grey1" css={{ marginBottom: "$2" }}>
                Principais Projetos
              </Text>
              <Project />
            </ProjectsAreaContent>
          </ProjectAreaWrapperColumns>
        </Container>
      </ProjectsArea>
    </main>
  );
};
