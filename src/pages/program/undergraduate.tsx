import { Container, LicenseTab, NavBar, ProgramCards } from "@/components";
import type { NextPage } from "next";
import Head from "next/head";
import { SlGraduation } from "react-icons/sl";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from "@chakra-ui/react";

const Undergraduate: NextPage = () => {
  return (
    <>
      <Head>
        <title>Undergraduate</title>
      </Head>
      <div>
        <NavBar />
        <Container>
          <div className="flex justify-center items-center">
            <SlGraduation size={38} />
            <h1 className="font-sans text-3xl ml-4">
              Licences Universitaires Professionnelles
            </h1>
          </div>
          <Tabs className="mt-8" position="relative">
            <TabList className="justify-center">
              <Tab>Faculté Economie et de Gestion</Tab>
              <Tab>Faculté des sciences</Tab>
              <Tab>Faculté des Lettres et des Sciences Humaines</Tab>
              <Tab>Faculté des Langues,des Lettres et des Arts</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <LicenseTab>
                  <ProgramCards
                    title="Heeeey"
                    imgLink="https://images.unsplash.com/photo-1685549925654-e86dcebdd21a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=581&q=80"
                  />
                  <ProgramCards
                    title="Heeeey"
                    imgLink="https://images.unsplash.com/photo-1685549925654-e86dcebdd21a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=581&q=80"
                  />
                  <ProgramCards
                    title="Heeeey"
                    imgLink="https://images.unsplash.com/photo-1685549925654-e86dcebdd21a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=581&q=80"
                  />
                  <ProgramCards
                    title="Heeeey"
                    imgLink="https://images.unsplash.com/photo-1685549925654-e86dcebdd21a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=581&q=80"
                  />
                  <ProgramCards
                    title="Heeeey"
                    imgLink="https://images.unsplash.com/photo-1685549925654-e86dcebdd21a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=581&q=80"
                  />
                  <ProgramCards
                    title="Heeeey"
                    imgLink="https://images.unsplash.com/photo-1685549925654-e86dcebdd21a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=581&q=80"
                  />
                </LicenseTab>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
              <TabPanel>
                <p>FOUR!!!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Container>
      </div>
    </>
  );
};

export default Undergraduate;
