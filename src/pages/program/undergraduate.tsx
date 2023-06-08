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
  Spinner,
} from "@chakra-ui/react";
import { useQuery } from "react-query";
import { Program, getPrograms } from "@/actions/programs";
import { useState } from "react";

const Undergraduate: NextPage = () => {
  const [tabIndex, setTabIndex] = useState<number>(0);

  const result = useQuery({
    queryKey: ["programs", tabIndex],
    queryFn: () => getPrograms("license", tabIndex),
  });

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
          <Tabs
            className="mt-8"
            position="relative"
            onChange={(index) => setTabIndex(index)}
          >
            <TabList className="justify-center">
              <Tab>Faculté Economie et de Gestion</Tab>
              <Tab>Faculté des sciences</Tab>
              <Tab>Faculté des Lettres et des Sciences Humaines</Tab>
              <Tab>Faculté des Langues,des Lettres et des Arts</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                {result.isLoading ? <Spinner /> : null}
                {result.isSuccess ? (
                  <LicenseTab>
                    {result.data.data.map((program: Program) => {
                      return (
                        <ProgramCards
                          key={program.id}
                          id={program.id}
                          imgLink={program.img_link}
                          title={program.title}
                        />
                      );
                    })}
                  </LicenseTab>
                ) : null}
              </TabPanel>
              <TabPanel>
                {result.isLoading ? <Spinner /> : null}
                {result.isSuccess ? (
                  <LicenseTab>
                    {result.data.data.map((program: Program) => {
                      return (
                        <ProgramCards
                          key={program.id}
                          id={program.id}
                          imgLink={program.img_link}
                          title={program.title}
                        />
                      );
                    })}
                  </LicenseTab>
                ) : null}
              </TabPanel>
              <TabPanel>
                {result.isLoading ? <Spinner /> : null}
                {result.isSuccess ? (
                  <LicenseTab>
                    {result.data.data.map((program: Program) => {
                      return (
                        <ProgramCards
                          key={program.id}
                          id={program.id}
                          imgLink={program.img_link}
                          title={program.title}
                        />
                      );
                    })}
                  </LicenseTab>
                ) : null}
              </TabPanel>
              <TabPanel>
                {result.isLoading ? <Spinner /> : null}
                {result.isSuccess ? (
                  <LicenseTab>
                    {result.data.data.map((program: Program) => {
                      return (
                        <ProgramCards
                          key={program.id}
                          id={program.id}
                          imgLink={program.img_link}
                          title={program.title}
                        />
                      );
                    })}
                  </LicenseTab>
                ) : null}
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Container>
      </div>
    </>
  );
};

export default Undergraduate;
