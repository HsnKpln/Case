

export interface CertificateModel{
  name: string,
  date: string
}


export interface CrewListModel {
        id: number,
        firstName: string,
        lastName: string,
        nationality: string,
        title: string,
        certificates: CertificateModel[]
    }

export class Model {
    
    crewList : CrewListModel[]

    constructor(){
        this.crewList= [
            {
                id: 1,
                firstName: "emre",
                lastName: "bahar",
                nationality: "erzincan",
                title: "junior",
                certificates: [
                  {
                    name: "JavaScript",
                    date: "May 20"
                  },
                  {
                    name: "css",
                    date: "May 20"
                  },
                ]
              },
              {
                id: 2,
                firstName: "Hasan",
                lastName: "Kaplan",
                nationality: "düzce",
                title: "Senior",
                certificates: [
                  {
                    name: "React",
                    date: "Dec 20"
                  },
                  {
                    name: "ReactNaitive",
                    date: "Nov 10"
                  },
                ]
              },
              {
                id: 3,
                firstName: "arda",
                lastName: "görür",
                nationality: "istanbul",
                title: "mid-senior",
                certificates: [
                  {
                    name: "Angular",
                    date: "Apr 20"
                  },
                  {
                    name: ".Net",
                    date: "Oct 20"
                  },
                ]
              }
        ]
    }
}