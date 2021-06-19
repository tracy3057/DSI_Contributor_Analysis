(function (d3$1) {
  'use strict';

  const nodes = [];
  const Researchnodes = [];
  const links = [];


  const HOME_NODE_SIZE = 15;
  const DSI_NODE_SIZE = 25;
  const MAIN_NODE_DISTANCE = 30;
  // const CENTER_NODE_DISTANCE = 20;
  const Research_DISTANCE = 40;
  const MANY_BODY_STRENGTH = -330;
  const RESEARCH_STRENGTH = -330;

  // const addCenterNode = (node) => {
  //   node.size = CENTER_NODE_SIZE;
  //   node.color = 'DodgerBLue';
  //   nodes.push(node);
  // };

  const addHomeNode = (node) => {
    node.size = HOME_NODE_SIZE;
    node.color = 'pink';
    nodes.push(node);
  };

  const addResearchNode = (node) => {
    node.size = HOME_NODE_SIZE;
    node.color = 'pink';
    nodes.push(node);
  };


  const addDSINode = (node) => {
    node.size = DSI_NODE_SIZE;
    node.color = 'LightSkyBlue';
    nodes.push(node);
  };

  const connectNodes = (source, target) => {
    links.push({
      source,
      target,
      distance: MAIN_NODE_DISTANCE,
      color: source.color
    });
  };

  const connectResearchNodes = (source, target) => {
    links.push({
      source,
      target,
      distance: Research_DISTANCE,
      color: source.color
    });
  };

  // const connectCenterNodes = (source, target) => {
  //   links.push({
  //     source,
  //     target,
  //     distance: CENTER_NODE_DISTANCE,
  //     color: source.color
  //   });
  // };

  const DSIGeneral = { id: 'DSI General' };
  addResearchNode(DSIGeneral);

  const GEUFBERetirementPlan = { id: 'GEU FBE Retirement Plan' };
  addResearchNode(GEUFBERetirementPlan);

  const OBGMFM = { id: 'OBG MFM' };
  addHomeNode(OBGMFM);

  const ENGComputerScience = { id: 'ENG Computer Science' };
  addResearchNode(ENGComputerScience);

  const CITResearchServices = { id: 'CIT Research Services' };
  addResearchNode(CITResearchServices);

  const ENGIEORGeneral = { id: 'ENG IEOR General' };
  addHomeNode(ENGIEORGeneral);

  const ASISERPResearch = { id: 'A&S ISERP Research' };
  addHomeNode(ASISERPResearch);

  const ENGElectricalEngineering = { id: 'ENG Electrical Engineering' };
  addResearchNode(ENGElectricalEngineering);

  const ENGAdministration = { id: 'ENG Administration' };
  addResearchNode(ENGAdministration);

  const ASEnglishComparativeLit = { id: 'A&S English & Comparative Lit' };
  addHomeNode(ASEnglishComparativeLit);

  const JRNAcademics = { id: 'JRN Academics' };
  addHomeNode(JRNAcademics);

  const ASColumbiaAstrophysicsLab = { id: 'A&S Columbia Astrophysics Lab' };
  addResearchNode(ASColumbiaAstrophysicsLab);

  const ENGApplPhysicsApplMath = { id: 'ENG Appl Physics & Appl Math' };
  addResearchNode(ENGApplPhysicsApplMath);

  const ENGChemicalEngineering = { id: 'ENG Chemical Engineering' };
  addResearchNode(ENGChemicalEngineering);

  const ENGIndustrialEngrOR = { id: 'ENG Industrial Engr & OR' };
  addResearchNode(ENGIndustrialEngrOR);

  const NEUChairsoffice = { id: 'NEU Chair\'s office' };
  addResearchNode(NEUChairsoffice);

  const ENGEarthEnvironmentalEngr = { id: 'ENG Earth & Environmental Engr' };
  addResearchNode(ENGEarthEnvironmentalEngr);

  const ENGMechanicalEngineering = { id: 'ENG Mechanical Engineering' };
  addResearchNode(ENGMechanicalEngineering);

  const IPAAcademicDeptSIPA = { id: 'IPA Academic Dept: SIPA' };
  addResearchNode(IPAAcademicDeptSIPA);

  const ARHInstruction = { id: 'ARH Instruction' };
  addResearchNode(ARHInstruction);

  const DBMDBMI = { id: 'DBM DBMI' };
  addResearchNode(DBMDBMI);

  const MICMicrobiology = { id: 'MIC Microbiology' };
  addResearchNode(MICMicrobiology);

  const PREOfficeofthePresident = { id: 'PRE Office of the President' };
  addResearchNode(PREOfficeofthePresident);

  const ASCenters = { id: 'A&S Centers' };
  addHomeNode(ASCenters);

  const ENGCivilEngrEngrMecha = { id: 'ENG Civil Engr  & Engr Mecha' };
  addResearchNode(ENGCivilEngrEngrMecha);

  const EILOceanandClimatePhysics = { id: 'EIL Ocean and Climate Physics' };
  addResearchNode(EILOceanandClimatePhysics);

  const EILGeochemistry = { id: 'EIL Geochemistry' };
  addHomeNode(EILGeochemistry);

  const LAWAcademicDepartmentLaw = { id: 'LAW Academic Department: Law' };
  addHomeNode(LAWAcademicDepartmentLaw);

  const ASBiologicalSciences = { id: 'A&S Biological Sciences' };
  addResearchNode(ASBiologicalSciences);

  const MEDRheumatology = { id: 'MED Rheumatology' };
  addResearchNode(MEDRheumatology);

  const EILCentralAdministration = { id: 'EIL Central Administration' };
  addResearchNode(EILCentralAdministration);

  const EILGrantsandContracts = { id: 'EIL Grants and Contracts' };
  addResearchNode(EILGrantsandContracts);

  const ASPoliticalScience = { id: 'A&S Political Science' };
  addResearchNode(ASPoliticalScience);

  const ASChemistry = { id: 'A&S Chemistry' };
  addResearchNode(ASChemistry);

  const ASPhysics = { id: 'A&S Physics' };
  addResearchNode(ASPhysics);

  const ASEconomics = { id: 'A&S Economics' };
  addResearchNode(ASEconomics);

  const ASE3B = { id: 'A&S E3B' };
  addHomeNode(ASE3B);

  const EIMCIESINGeneral = { id: 'EIM CIESIN General' };
  addResearchNode(EIMCIESINGeneral);

  const BUSLangCtr = { id: 'BUS Lang Ctr' };
  addResearchNode(BUSLangCtr);

  const ENGHumanResources = { id: 'ENG Human Resources' };
  addResearchNode(ENGHumanResources);

  const BUSMarketing = { id: 'BUS Marketing' };
  addResearchNode(BUSMarketing);

  const EIMResearchSustPolicyMgmt = { id: 'EIM Research Sust Policy Mgmt' };
  addResearchNode(EIMResearchSustPolicyMgmt);

  const PSVDResearch = { id: 'P&S VD Research' };
  addResearchNode(PSVDResearch);

  const ENGBiomedicalEngineering = { id: 'ENG Biomedical Engineering' };
  addResearchNode(ENGBiomedicalEngineering);

  const PFHHDPFH = { id: 'PFH HDPFH' };
  addResearchNode(PFHHDPFH);

  const SSWOfficeofSponsoredProj = { id: 'SSW Office of Sponsored Proj' };
  addResearchNode(SSWOfficeofSponsoredProj);

  const SSWSocialWorkInstruction = { id: 'SSW Social Work Instruction' };
  addResearchNode(SSWSocialWorkInstruction);

  const NEUMovDisClinicalRsch = { id: 'NEU Mov Dis Clinical Rsch' };
  addResearchNode(NEUMovDisClinicalRsch);

  const PHAAdministration = { id: 'PHA Administration' };
  addResearchNode(PHAAdministration);

  const BUSDecisionRiskandOpers = { id: 'BUS Decision, Risk and Opers' };
  addResearchNode(BUSDecisionRiskandOpers);

  const BUSExtRelationsDevelopment = { id: 'BUS Ext Relations &Development' };
  addResearchNode(BUSExtRelationsDevelopment);

  const ZUCFusiLab = { id: 'ZUC Fusi Lab' };
  addResearchNode(ZUCFusiLab);

  const ZUCAbbottLab = { id: 'ZUC Abbott Lab' };
  addResearchNode(ZUCAbbottLab);

  const EILSeismologyGeoTectonphys = { id: 'EIL Seismology, Geo&Tectonphys' };
  addResearchNode(EILSeismologyGeoTectonphys);

  const ASPsychology = { id: 'A&S Psychology' };
  addResearchNode(ASPsychology);

  const JSBC2B2 = { id: 'JSB C2B2' };
  addResearchNode(JSBC2B2);

  const NURResearchOperations = { id: 'NUR Research Operations' };
  addResearchNode(NURResearchOperations);

  const EIMCCSR01 = { id: 'EIM CCSR- 01' };
  addResearchNode(EIMCCSR01);

  const JRNCenters = { id: 'JRN Centers' };
  addResearchNode(JRNCenters);

  const BUSManagement = { id: 'BUS Management' };
  addHomeNode(BUSManagement);

  const PRVProvostOffice = { id: 'PRV Provost Office' };
  addResearchNode(PRVProvostOffice);

  const ENGIEORFaculty = { id: 'ENG IEOR Faculty' };
  addResearchNode(ENGIEORFaculty);

  const OADCEntrepreneurship = { id: 'OAD C-Entrepreneurship' };
  addResearchNode(OADCEntrepreneurship);

  const MEDCardiology = { id: 'MED Cardiology' };
  addResearchNode(MEDCardiology);

  const RESCoreOperations = { id: 'RES Core Operations' };
  addResearchNode(RESCoreOperations);

  const ASEarthEnvironSci = { id: 'A&S Earth & Environ Sci' };
  addHomeNode(ASEarthEnvironSci);

  const BUSFinanceEconomics = { id: 'BUS Finance & Economics' };
  addHomeNode(BUSFinanceEconomics);

  const SMSSociomedicalScience = { id: 'SMS Sociomedical Science' };
  addResearchNode(SMSSociomedicalScience);

  const MHESocietyMedicine = { id: 'MHE Society & Medicine' };
  addResearchNode(MHESocietyMedicine);

  const EPIEpidemiology = { id: 'EPI Epidemiology' };
  addResearchNode(EPIEpidemiology);

  const HICCoreBiostatistics = { id: 'HIC Core Biostatistics' };
  addResearchNode(HICCoreBiostatistics);

  const ASMathematics = { id: 'A&S Mathematics' };
  addResearchNode(ASMathematics);

  const BUSDeansOffice = { id: 'BUS Dean\'s Office' };
  addResearchNode(BUSDeansOffice);

  const BUSCITI = { id: 'BUS CITI' };
  addResearchNode(BUSCITI);

  const EHSEnvironmentHealthScience = { id: 'EHS Environment Health Science' };
  addResearchNode(EHSEnvironmentHealthScience);

  const CTVStrategicInitiatives = { id: 'CTV Strategic Initiatives' };
  addResearchNode(CTVStrategicInitiatives);

  const BUSCtrforDecisionSciences = { id: 'BUS Ctr for Decision Sciences' };
  addHomeNode(BUSCtrforDecisionSciences);

  const BSTBiostatistics = { id: 'BST Biostatistics' };
  addHomeNode(BSTBiostatistics);

  const EILMarineGeologyGeophysic = { id: 'EIL Marine Geology & Geophysic' };
  addResearchNode(EILMarineGeologyGeophysic);

  const ENGCVN = { id: 'ENG CVN' };
  addResearchNode(ENGCVN);

  const BUSFinanceDeptAdmin = { id: 'BUS Finance Dept Admin' };
  addHomeNode(BUSFinanceDeptAdmin);

  const ASSociology = { id: 'A&S Sociology' };
  addResearchNode(ASSociology);

  const ASStatistics = { id: 'A&S Statistics' };
  addResearchNode(ASStatistics);

  const ENGCCLSResearch = { id: 'ENG CCLS Research' };
  addDSINode(ENGCCLSResearch);

  const ENGDATASCIENCEResearch = { id: 'ENG DATA SCIENCE Research' };
  addDSINode(ENGDATASCIENCEResearch);

  const ENGDATASCIENCE = { id: 'ENG DATA SCIENCE' };
  addDSINode(ENGDATASCIENCE);

  const DSIResearchGeneral = { id: 'DSI Research General' };
  addDSINode(DSIResearchGeneral);

  const DSIResearchSTATS = { id: 'DSI Research STATS' };
  addDSINode(DSIResearchSTATS);

  const ENGCCLS = { id: 'ENG CCLS' };
  addDSINode(ENGCCLS);

  const ENGDATASCIENCEGeneral = { id: 'ENG DATA SCIENCE General' };
  addDSINode(ENGDATASCIENCEGeneral);

  // const center = { id: 'DSI' };
  // addCenterNode(center);


  connectResearchNodes(ASBiologicalSciences, ENGDATASCIENCEResearch);
  connectNodes(ASCenters, ENGCCLSResearch);
  connectResearchNodes(ASChemistry, ENGDATASCIENCEResearch);
  connectNodes(ASColumbiaAstrophysicsLab, DSIResearchGeneral);
  connectNodes(ASColumbiaAstrophysicsLab, DSIResearchSTATS);
  connectNodes(ASColumbiaAstrophysicsLab, ENGCCLSResearch);
  connectNodes(ASColumbiaAstrophysicsLab, ENGDATASCIENCEGeneral);
  connectResearchNodes(ASColumbiaAstrophysicsLab, ENGDATASCIENCEResearch);
  connectNodes(ASE3B, ENGDATASCIENCEGeneral);
  connectNodes(ASEarthEnvironSci, DSIResearchGeneral);
  connectResearchNodes(ASEconomics, ENGDATASCIENCEResearch);
  connectNodes(ASEnglishComparativeLit, ENGCCLSResearch);
  connectNodes(ASISERPResearch, DSIResearchSTATS);
  connectNodes(ASISERPResearch, ENGCCLSResearch);
  connectResearchNodes(ASMathematics, ENGDATASCIENCEResearch);
  connectResearchNodes(ASPhysics, ENGDATASCIENCEResearch);
  connectResearchNodes(ASPoliticalScience, ENGDATASCIENCEResearch);
  connectNodes(ASPsychology, DSIResearchGeneral);
  connectResearchNodes(ASPsychology, ENGDATASCIENCEResearch);
  connectNodes(ASSociology, DSIResearchSTATS);
  connectNodes(ASSociology, ENGCCLSResearch);
  connectResearchNodes(ASSociology, ENGDATASCIENCEResearch);
  connectNodes(ASStatistics, DSIResearchGeneral);
  connectNodes(ASStatistics, DSIResearchSTATS);
  connectNodes(ASStatistics, ENGDATASCIENCEGeneral);
  connectResearchNodes(ASStatistics, ENGDATASCIENCEResearch);
  connectResearchNodes(ARHInstruction, ENGDATASCIENCEResearch);
  connectNodes(BSTBiostatistics, DSIResearchGeneral);
  connectNodes(BUSCITI, DSIResearchGeneral);
  connectResearchNodes(BUSCITI, ENGDATASCIENCEResearch);
  connectNodes(BUSCtrforDecisionSciences, DSIResearchGeneral);
  connectNodes(BUSDeansOffice, DSIResearchGeneral);
  connectResearchNodes(BUSDeansOffice, ENGDATASCIENCEResearch);
  connectResearchNodes(BUSDecisionRiskandOpers, ENGDATASCIENCEResearch);
  connectResearchNodes(BUSExtRelationsDevelopment, ENGDATASCIENCEResearch);
  connectNodes(BUSFinanceEconomics, DSIResearchGeneral);
  connectNodes(BUSFinanceDeptAdmin, DSIResearchGeneral);
  connectResearchNodes(BUSLangCtr, ENGDATASCIENCEResearch);
  connectNodes(BUSManagement, DSIResearchGeneral);
  connectNodes(BUSMarketing, DSIResearchGeneral);
  connectResearchNodes(BUSMarketing, ENGDATASCIENCEResearch);
  connectNodes(CITResearchServices, ENGCCLSResearch);
  connectResearchNodes(CITResearchServices, ENGDATASCIENCEResearch);
  connectResearchNodes(CTVStrategicInitiatives, ENGDATASCIENCEResearch);
  connectNodes(DBMDBMI, DSIResearchGeneral);
  connectResearchNodes(DBMDBMI, ENGDATASCIENCEResearch);
  connectNodes(DSIGeneral, DSIResearchGeneral);
  connectNodes(DSIGeneral, DSIResearchSTATS);
  connectNodes(DSIGeneral, ENGCCLSResearch);
  connectNodes(DSIGeneral, ENGDATASCIENCE);
  connectNodes(DSIGeneral, ENGDATASCIENCEGeneral);
  connectResearchNodes(DSIGeneral, ENGDATASCIENCEResearch);
  connectResearchNodes(EHSEnvironmentHealthScience, ENGDATASCIENCEResearch);
  connectResearchNodes(EILCentralAdministration, ENGDATASCIENCEResearch);
  connectResearchNodes(EILGeochemistry, ENGDATASCIENCEResearch);
  connectResearchNodes(EILGrantsandContracts, ENGDATASCIENCEResearch);
  connectResearchNodes(EILMarineGeologyGeophysic, ENGDATASCIENCEResearch);
  connectResearchNodes(EILOceanandClimatePhysics, ENGDATASCIENCEResearch);
  connectResearchNodes(EILSeismologyGeoTectonphys, ENGDATASCIENCEResearch);
  connectResearchNodes(EIMCCSR01, ENGDATASCIENCEResearch);
  connectResearchNodes(EIMCIESINGeneral, ENGDATASCIENCEResearch);
  connectResearchNodes(EIMResearchSustPolicyMgmt, ENGDATASCIENCEResearch);
  connectNodes(ENGAdministration, ENGCCLSResearch);
  connectResearchNodes(ENGAdministration, ENGDATASCIENCEResearch);
  connectNodes(ENGAdministration, ENGDATASCIENCEGeneral);
  connectNodes(ENGApplPhysicsApplMath, DSIResearchGeneral);
  connectNodes(ENGApplPhysicsApplMath, ENGDATASCIENCEGeneral);
  connectResearchNodes(ENGApplPhysicsApplMath, ENGDATASCIENCEResearch);
  connectResearchNodes(ENGBiomedicalEngineering, ENGDATASCIENCEResearch);
  connectNodes(ENGCCLS, ENGCCLS);
  connectNodes(ENGCCLS, ENGCCLSResearch);
  connectResearchNodes(ENGCVN, ENGDATASCIENCEResearch);
  connectNodes(ENGChemicalEngineering, ENGDATASCIENCEGeneral);
  connectResearchNodes(ENGChemicalEngineering, ENGDATASCIENCEResearch);
  connectResearchNodes(ENGCivilEngrEngrMecha, ENGDATASCIENCEResearch);
  connectNodes(ENGComputerScience, DSIResearchGeneral);
  connectNodes(ENGComputerScience, DSIResearchSTATS);
  connectNodes(ENGComputerScience, ENGCCLS);
  connectNodes(ENGComputerScience, ENGCCLSResearch);
  connectNodes(ENGComputerScience, ENGDATASCIENCE);
  connectNodes(ENGComputerScience, ENGDATASCIENCEGeneral);
  connectResearchNodes(ENGComputerScience, ENGDATASCIENCEResearch);
  connectResearchNodes(ENGDATASCIENCEGeneral, ENGDATASCIENCEResearch);
  connectNodes(ENGEarthEnvironmentalEngr, DSIResearchGeneral);
  connectNodes(ENGEarthEnvironmentalEngr, ENGDATASCIENCEGeneral);
  connectResearchNodes(ENGEarthEnvironmentalEngr, ENGDATASCIENCEResearch);
  connectNodes(ENGElectricalEngineering, DSIResearchGeneral);
  connectNodes(ENGElectricalEngineering, ENGCCLSResearch);
  connectNodes(ENGElectricalEngineering, ENGDATASCIENCE);
  connectNodes(ENGElectricalEngineering, ENGDATASCIENCEGeneral);
  connectResearchNodes(ENGElectricalEngineering, ENGDATASCIENCEResearch);
  connectResearchNodes(ENGHumanResources, ENGDATASCIENCEResearch);
  connectResearchNodes(ENGIEORFaculty, ENGDATASCIENCEResearch);
  connectNodes(ENGIEORGeneral, ENGCCLS);
  connectNodes(ENGIndustrialEngrOR, DSIResearchGeneral);
  connectNodes(ENGIndustrialEngrOR, ENGCCLSResearch);
  connectResearchNodes(ENGIndustrialEngrOR, ENGDATASCIENCEResearch);
  connectNodes(ENGMechanicalEngineering, DSIResearchGeneral);
  connectNodes(ENGMechanicalEngineering, ENGDATASCIENCEGeneral);
  connectResearchNodes(ENGMechanicalEngineering, ENGDATASCIENCEResearch);
  connectResearchNodes(EPIEpidemiology, ENGDATASCIENCEResearch);
  connectNodes(GEUFBERetirementPlan, DSIResearchGeneral);
  connectResearchNodes(GEUFBERetirementPlan, ENGDATASCIENCEResearch);
  connectResearchNodes(HICCoreBiostatistics, ENGDATASCIENCEResearch);
  connectResearchNodes(IPAAcademicDeptSIPA, ENGDATASCIENCEResearch);
  connectNodes(JRNAcademics, DSIResearchSTATS);
  connectNodes(JRNAcademics, ENGCCLSResearch);
  connectResearchNodes(JRNCenters, ENGDATASCIENCEResearch);
  connectResearchNodes(JSBC2B2, ENGDATASCIENCEResearch);
  connectResearchNodes(LAWAcademicDepartmentLaw, ENGDATASCIENCEResearch);
  connectResearchNodes(MEDCardiology, ENGDATASCIENCEResearch);
  connectNodes(MEDRheumatology, ENGDATASCIENCE);
  connectResearchNodes(MEDRheumatology, ENGDATASCIENCEResearch);
  connectResearchNodes(MHESocietyMedicine, ENGDATASCIENCEResearch);
  connectResearchNodes(MICMicrobiology, ENGDATASCIENCEResearch);
  connectNodes(NEUChairsoffice, ENGCCLSResearch);
  connectResearchNodes(NEUChairsoffice, ENGDATASCIENCEResearch);
  connectResearchNodes(NEUMovDisClinicalRsch, ENGDATASCIENCEResearch);
  connectNodes(NURResearchOperations, DSIResearchGeneral);
  connectResearchNodes(NURResearchOperations, ENGDATASCIENCEResearch);
  connectResearchNodes(OADCEntrepreneurship, ENGDATASCIENCEResearch);
  connectNodes(OBGMFM, ENGCCLSResearch);
  connectResearchNodes(PSVDResearch, ENGDATASCIENCEResearch);
  connectResearchNodes(PFHHDPFH, ENGDATASCIENCEResearch);
  connectResearchNodes(PHAAdministration, ENGDATASCIENCEResearch);
  connectResearchNodes(PREOfficeofthePresident, ENGDATASCIENCEResearch);
  connectResearchNodes(PRVProvostOffice, ENGDATASCIENCEResearch);
  connectResearchNodes(RESCoreOperations, ENGDATASCIENCEResearch);
  connectResearchNodes(SMSSociomedicalScience, ENGDATASCIENCEResearch);
  connectResearchNodes(SSWOfficeofSponsoredProj, ENGDATASCIENCEResearch);
  connectNodes(SSWSocialWorkInstruction, DSIResearchGeneral);
  connectNodes(SSWSocialWorkInstruction, DSIResearchSTATS);
  connectResearchNodes(SSWSocialWorkInstruction, ENGDATASCIENCEResearch);
  connectResearchNodes(ZUCAbbottLab, ENGDATASCIENCEResearch);
  connectResearchNodes(ZUCFusiLab, ENGDATASCIENCEResearch);



  // connectCenterNodes(center, ENGCCLSResearch);
  // connectCenterNodes(center, ENGCCLS);
  // connectCenterNodes(center, ENGDATASCIENCEGeneral);
  // connectCenterNodes(center, ENGDATASCIENCEResearch);
  // connectCenterNodes(center, ENGDATASCIENCE);
  // connectCenterNodes(center, DSIResearchGeneral);
  // connectCenterNodes(center, DSIResearchSTATS);

  var svg = d3$1.select('div#svg-container2').append("svg")
  .attr("preserveAspectRatio", "xMinYMin meet")
  .attr("viewBox", "0 0 970 900")
  .classed("svg-content", true);
  const width = 970;
  const height = 900;
  const centerX = width / 2.2;
  const centerY = height / 3;

  const simulation2 = d3$1.forceSimulation(Researchnodes)
    .force('charge', d3$1.forceManyBody().strength(RESEARCH_STRENGTH).distanceMax(800))
    .force(
      'link',
      d3$1.forceLink(links).distance((link) => link.distance)
    )
    .force("collision", d3.forceCollide().radius(25))
    .force('center', d3$1.forceCenter(centerX, centerY));

  const simulation = d3$1.forceSimulation(nodes)
    .force('charge', d3$1.forceManyBody().strength(MANY_BODY_STRENGTH).distanceMax(800))
    .force(
      'link',
      d3$1.forceLink(links).distance((link) => link.distance)
    )
    .force("collision", d3.forceCollide().radius(10))
    .force('center', d3$1.forceCenter(centerX, centerY));


  const dragInteraction = d3$1.drag()
  	.on('start', (event, node) =>{
  			if (!event.active) simulation.alphaTarget(0.3).restart();
      	if (!event.active) simulation2.alphaTarget(0.3).restart();
        node.fx = event.x;
        node.fy = event.y;
    })
  	.on('drag', (event, node) => {
    node.fx = event.x;
    node.fy = event.y;
    // simulation2.alphaTarget(0);
    // simulation2.restart();
    // simulation.alphaTarget(0);
    // simulation.restart();
  })
  	.on('end',(event, node) => {
        if (!event.active) simulation.alphaTarget(0);
        node.fx = null;
        node.fy = null;
     //   event.subject.fixed = true;
        console.log(event);
  });


  const lines = svg
    .selectAll('line')
    .data(links)
    .enter()
    .append('line')
    .attr('stroke', 'gray')
  	.attr('stroke-width','0.4px');

  console.log(nodes[1].id);

  const circles = svg
    .selectAll('circle')
    .data(nodes)
    .enter()
    .append('circle')
    .attr('fill', (node) => node.color || 'gray')
    .attr('r', (node) => node.size)
    .call(dragInteraction);

  const text = svg
    .selectAll('text')
    .data(nodes)
    .enter()
    .append('text')
    .attr('text-anchor', 'middle')
  	.attr('font-size', '10px')
    .attr('alignment-baseline', 'middle')
    .style('pointer-events', 'none')
  	.style('fill', 'gray')
    .text((node) => node.id.substring(0,8));


  simulation.on('tick', () => {
    circles.attr('cx', (node) => node.x).attr('cy', (node) => node.y);
    text.attr('x', (node) => node.x).attr('y', (node) => node.y);

    lines
      .attr('x1', (link) => link.source.x)
      .attr('y1', (link) => link.source.y)
      .attr('x2', (link) => link.target.x)
      .attr('y2', (link) => link.target.y);
  });

  simulation2.on('tick', () => {
    circles.attr('cx', (node) => node.x).attr('cy', (node) => node.y);
    text.attr('x', (node) => node.x).attr('y', (node) => node.y);

    lines
      .attr('x1', (link) => link.source.x)
      .attr('y1', (link) => link.source.y)
      .attr('x2', (link) => link.target.x)
      .attr('y2', (link) => link.target.y);
  });

  svg.selectAll('circle')
    .data(nodes)
  .append('title')
  .text((node) => node.id);

}(d3));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbImRhdGEuanMiLCJpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb2xvcnMgfSBmcm9tICcuL2NvbG9ycyc7XG5cbmV4cG9ydCBjb25zdCBub2RlcyA9IFtdO1xuZXhwb3J0IGNvbnN0IFJlc2VhcmNobm9kZXMgPSBbXTtcbmV4cG9ydCBjb25zdCBsaW5rcyA9IFtdO1xuXG5cbmNvbnN0IEhPTUVfTk9ERV9TSVpFID0gMTU7XG5jb25zdCBEU0lfTk9ERV9TSVpFID0gMjU7XG5jb25zdCBDRU5URVJfTk9ERV9TSVpFID0gNTA7XG5jb25zdCBMRUFGX05PREVfU0laRSA9IDEwO1xuY29uc3QgREVGQVVMVF9ESVNUQU5DRSA9IDA7XG5jb25zdCBNQUlOX05PREVfRElTVEFOQ0UgPSAzMDtcbi8vIGNvbnN0IENFTlRFUl9OT0RFX0RJU1RBTkNFID0gMjA7XG5jb25zdCBSZXNlYXJjaF9ESVNUQU5DRSA9IDQwO1xuY29uc3QgQ0VOVEVSX0RJU1RBTkNFID0gMDtcbmNvbnN0IExFQUZfTk9ERV9ESVNUQU5DRSA9IDA7XG5leHBvcnQgY29uc3QgTUFOWV9CT0RZX1NUUkVOR1RIID0gLTMzMDtcbmV4cG9ydCBjb25zdCBSRVNFQVJDSF9TVFJFTkdUSCA9IC0zMzA7XG5cbi8vIGNvbnN0IGFkZENlbnRlck5vZGUgPSAobm9kZSkgPT4ge1xuLy8gICBub2RlLnNpemUgPSBDRU5URVJfTk9ERV9TSVpFO1xuLy8gICBub2RlLmNvbG9yID0gJ0RvZGdlckJMdWUnO1xuLy8gICBub2Rlcy5wdXNoKG5vZGUpO1xuLy8gfTtcblxuY29uc3QgYWRkSG9tZU5vZGUgPSAobm9kZSkgPT4ge1xuICBub2RlLnNpemUgPSBIT01FX05PREVfU0laRTtcbiAgbm9kZS5jb2xvciA9ICdwaW5rJztcbiAgbm9kZXMucHVzaChub2RlKTtcbn07XG5cbmNvbnN0IGFkZFJlc2VhcmNoTm9kZSA9IChub2RlKSA9PiB7XG4gIG5vZGUuc2l6ZSA9IEhPTUVfTk9ERV9TSVpFO1xuICBub2RlLmNvbG9yID0gJ3BpbmsnO1xuICBub2Rlcy5wdXNoKG5vZGUpO1xufTtcblxuXG5jb25zdCBhZGREU0lOb2RlID0gKG5vZGUpID0+IHtcbiAgbm9kZS5zaXplID0gRFNJX05PREVfU0laRTtcbiAgbm9kZS5jb2xvciA9ICdMaWdodFNreUJsdWUnO1xuICBub2Rlcy5wdXNoKG5vZGUpO1xufTtcblxuY29uc3QgY29ubmVjdE5vZGVzID0gKHNvdXJjZSwgdGFyZ2V0KSA9PiB7XG4gIGxpbmtzLnB1c2goe1xuICAgIHNvdXJjZSxcbiAgICB0YXJnZXQsXG4gICAgZGlzdGFuY2U6IE1BSU5fTk9ERV9ESVNUQU5DRSxcbiAgICBjb2xvcjogc291cmNlLmNvbG9yXG4gIH0pO1xufTtcblxuY29uc3QgY29ubmVjdFJlc2VhcmNoTm9kZXMgPSAoc291cmNlLCB0YXJnZXQpID0+IHtcbiAgbGlua3MucHVzaCh7XG4gICAgc291cmNlLFxuICAgIHRhcmdldCxcbiAgICBkaXN0YW5jZTogUmVzZWFyY2hfRElTVEFOQ0UsXG4gICAgY29sb3I6IHNvdXJjZS5jb2xvclxuICB9KTtcbn07XG5cbi8vIGNvbnN0IGNvbm5lY3RDZW50ZXJOb2RlcyA9IChzb3VyY2UsIHRhcmdldCkgPT4ge1xuLy8gICBsaW5rcy5wdXNoKHtcbi8vICAgICBzb3VyY2UsXG4vLyAgICAgdGFyZ2V0LFxuLy8gICAgIGRpc3RhbmNlOiBDRU5URVJfTk9ERV9ESVNUQU5DRSxcbi8vICAgICBjb2xvcjogc291cmNlLmNvbG9yXG4vLyAgIH0pO1xuLy8gfTtcblxuY29uc3QgRFNJR2VuZXJhbCA9IHsgaWQ6ICdEU0kgR2VuZXJhbCcgfTtcbmFkZFJlc2VhcmNoTm9kZShEU0lHZW5lcmFsKTtcblxuY29uc3QgR0VVRkJFUmV0aXJlbWVudFBsYW4gPSB7IGlkOiAnR0VVIEZCRSBSZXRpcmVtZW50IFBsYW4nIH07XG5hZGRSZXNlYXJjaE5vZGUoR0VVRkJFUmV0aXJlbWVudFBsYW4pO1xuXG5jb25zdCBPQkdNRk0gPSB7IGlkOiAnT0JHIE1GTScgfTtcbmFkZEhvbWVOb2RlKE9CR01GTSk7XG5cbmNvbnN0IEVOR0NvbXB1dGVyU2NpZW5jZSA9IHsgaWQ6ICdFTkcgQ29tcHV0ZXIgU2NpZW5jZScgfTtcbmFkZFJlc2VhcmNoTm9kZShFTkdDb21wdXRlclNjaWVuY2UpO1xuXG5jb25zdCBDSVRSZXNlYXJjaFNlcnZpY2VzID0geyBpZDogJ0NJVCBSZXNlYXJjaCBTZXJ2aWNlcycgfTtcbmFkZFJlc2VhcmNoTm9kZShDSVRSZXNlYXJjaFNlcnZpY2VzKTtcblxuY29uc3QgRU5HSUVPUkdlbmVyYWwgPSB7IGlkOiAnRU5HIElFT1IgR2VuZXJhbCcgfTtcbmFkZEhvbWVOb2RlKEVOR0lFT1JHZW5lcmFsKTtcblxuY29uc3QgQVNJU0VSUFJlc2VhcmNoID0geyBpZDogJ0EmUyBJU0VSUCBSZXNlYXJjaCcgfTtcbmFkZEhvbWVOb2RlKEFTSVNFUlBSZXNlYXJjaCk7XG5cbmNvbnN0IEVOR0VsZWN0cmljYWxFbmdpbmVlcmluZyA9IHsgaWQ6ICdFTkcgRWxlY3RyaWNhbCBFbmdpbmVlcmluZycgfTtcbmFkZFJlc2VhcmNoTm9kZShFTkdFbGVjdHJpY2FsRW5naW5lZXJpbmcpO1xuXG5jb25zdCBFTkdBZG1pbmlzdHJhdGlvbiA9IHsgaWQ6ICdFTkcgQWRtaW5pc3RyYXRpb24nIH07XG5hZGRSZXNlYXJjaE5vZGUoRU5HQWRtaW5pc3RyYXRpb24pO1xuXG5jb25zdCBBU0VuZ2xpc2hDb21wYXJhdGl2ZUxpdCA9IHsgaWQ6ICdBJlMgRW5nbGlzaCAmIENvbXBhcmF0aXZlIExpdCcgfTtcbmFkZEhvbWVOb2RlKEFTRW5nbGlzaENvbXBhcmF0aXZlTGl0KTtcblxuY29uc3QgSlJOQWNhZGVtaWNzID0geyBpZDogJ0pSTiBBY2FkZW1pY3MnIH07XG5hZGRIb21lTm9kZShKUk5BY2FkZW1pY3MpO1xuXG5jb25zdCBBU0NvbHVtYmlhQXN0cm9waHlzaWNzTGFiID0geyBpZDogJ0EmUyBDb2x1bWJpYSBBc3Ryb3BoeXNpY3MgTGFiJyB9O1xuYWRkUmVzZWFyY2hOb2RlKEFTQ29sdW1iaWFBc3Ryb3BoeXNpY3NMYWIpO1xuXG5jb25zdCBFTkdBcHBsUGh5c2ljc0FwcGxNYXRoID0geyBpZDogJ0VORyBBcHBsIFBoeXNpY3MgJiBBcHBsIE1hdGgnIH07XG5hZGRSZXNlYXJjaE5vZGUoRU5HQXBwbFBoeXNpY3NBcHBsTWF0aCk7XG5cbmNvbnN0IEVOR0NoZW1pY2FsRW5naW5lZXJpbmcgPSB7IGlkOiAnRU5HIENoZW1pY2FsIEVuZ2luZWVyaW5nJyB9O1xuYWRkUmVzZWFyY2hOb2RlKEVOR0NoZW1pY2FsRW5naW5lZXJpbmcpO1xuXG5jb25zdCBFTkdJbmR1c3RyaWFsRW5nck9SID0geyBpZDogJ0VORyBJbmR1c3RyaWFsIEVuZ3IgJiBPUicgfTtcbmFkZFJlc2VhcmNoTm9kZShFTkdJbmR1c3RyaWFsRW5nck9SKTtcblxuY29uc3QgTkVVQ2hhaXJzb2ZmaWNlID0geyBpZDogJ05FVSBDaGFpclxcJ3Mgb2ZmaWNlJyB9O1xuYWRkUmVzZWFyY2hOb2RlKE5FVUNoYWlyc29mZmljZSk7XG5cbmNvbnN0IEVOR0VhcnRoRW52aXJvbm1lbnRhbEVuZ3IgPSB7IGlkOiAnRU5HIEVhcnRoICYgRW52aXJvbm1lbnRhbCBFbmdyJyB9O1xuYWRkUmVzZWFyY2hOb2RlKEVOR0VhcnRoRW52aXJvbm1lbnRhbEVuZ3IpO1xuXG5jb25zdCBFTkdNZWNoYW5pY2FsRW5naW5lZXJpbmcgPSB7IGlkOiAnRU5HIE1lY2hhbmljYWwgRW5naW5lZXJpbmcnIH07XG5hZGRSZXNlYXJjaE5vZGUoRU5HTWVjaGFuaWNhbEVuZ2luZWVyaW5nKTtcblxuY29uc3QgSVBBQWNhZGVtaWNEZXB0U0lQQSA9IHsgaWQ6ICdJUEEgQWNhZGVtaWMgRGVwdDogU0lQQScgfTtcbmFkZFJlc2VhcmNoTm9kZShJUEFBY2FkZW1pY0RlcHRTSVBBKTtcblxuY29uc3QgQVJISW5zdHJ1Y3Rpb24gPSB7IGlkOiAnQVJIIEluc3RydWN0aW9uJyB9O1xuYWRkUmVzZWFyY2hOb2RlKEFSSEluc3RydWN0aW9uKTtcblxuY29uc3QgREJNREJNSSA9IHsgaWQ6ICdEQk0gREJNSScgfTtcbmFkZFJlc2VhcmNoTm9kZShEQk1EQk1JKTtcblxuY29uc3QgTUlDTWljcm9iaW9sb2d5ID0geyBpZDogJ01JQyBNaWNyb2Jpb2xvZ3knIH07XG5hZGRSZXNlYXJjaE5vZGUoTUlDTWljcm9iaW9sb2d5KTtcblxuY29uc3QgUFJFT2ZmaWNlb2Z0aGVQcmVzaWRlbnQgPSB7IGlkOiAnUFJFIE9mZmljZSBvZiB0aGUgUHJlc2lkZW50JyB9O1xuYWRkUmVzZWFyY2hOb2RlKFBSRU9mZmljZW9mdGhlUHJlc2lkZW50KTtcblxuY29uc3QgQVNDZW50ZXJzID0geyBpZDogJ0EmUyBDZW50ZXJzJyB9O1xuYWRkSG9tZU5vZGUoQVNDZW50ZXJzKTtcblxuY29uc3QgRU5HQ2l2aWxFbmdyRW5nck1lY2hhID0geyBpZDogJ0VORyBDaXZpbCBFbmdyICAmIEVuZ3IgTWVjaGEnIH07XG5hZGRSZXNlYXJjaE5vZGUoRU5HQ2l2aWxFbmdyRW5nck1lY2hhKTtcblxuY29uc3QgRUlMT2NlYW5hbmRDbGltYXRlUGh5c2ljcyA9IHsgaWQ6ICdFSUwgT2NlYW4gYW5kIENsaW1hdGUgUGh5c2ljcycgfTtcbmFkZFJlc2VhcmNoTm9kZShFSUxPY2VhbmFuZENsaW1hdGVQaHlzaWNzKTtcblxuY29uc3QgRUlMR2VvY2hlbWlzdHJ5ID0geyBpZDogJ0VJTCBHZW9jaGVtaXN0cnknIH07XG5hZGRIb21lTm9kZShFSUxHZW9jaGVtaXN0cnkpO1xuXG5jb25zdCBMQVdBY2FkZW1pY0RlcGFydG1lbnRMYXcgPSB7IGlkOiAnTEFXIEFjYWRlbWljIERlcGFydG1lbnQ6IExhdycgfTtcbmFkZEhvbWVOb2RlKExBV0FjYWRlbWljRGVwYXJ0bWVudExhdyk7XG5cbmNvbnN0IEFTQmlvbG9naWNhbFNjaWVuY2VzID0geyBpZDogJ0EmUyBCaW9sb2dpY2FsIFNjaWVuY2VzJyB9O1xuYWRkUmVzZWFyY2hOb2RlKEFTQmlvbG9naWNhbFNjaWVuY2VzKTtcblxuY29uc3QgTUVEUmhldW1hdG9sb2d5ID0geyBpZDogJ01FRCBSaGV1bWF0b2xvZ3knIH07XG5hZGRSZXNlYXJjaE5vZGUoTUVEUmhldW1hdG9sb2d5KTtcblxuY29uc3QgRUlMQ2VudHJhbEFkbWluaXN0cmF0aW9uID0geyBpZDogJ0VJTCBDZW50cmFsIEFkbWluaXN0cmF0aW9uJyB9O1xuYWRkUmVzZWFyY2hOb2RlKEVJTENlbnRyYWxBZG1pbmlzdHJhdGlvbik7XG5cbmNvbnN0IEVJTEdyYW50c2FuZENvbnRyYWN0cyA9IHsgaWQ6ICdFSUwgR3JhbnRzIGFuZCBDb250cmFjdHMnIH07XG5hZGRSZXNlYXJjaE5vZGUoRUlMR3JhbnRzYW5kQ29udHJhY3RzKTtcblxuY29uc3QgQVNQb2xpdGljYWxTY2llbmNlID0geyBpZDogJ0EmUyBQb2xpdGljYWwgU2NpZW5jZScgfTtcbmFkZFJlc2VhcmNoTm9kZShBU1BvbGl0aWNhbFNjaWVuY2UpO1xuXG5jb25zdCBBU0NoZW1pc3RyeSA9IHsgaWQ6ICdBJlMgQ2hlbWlzdHJ5JyB9O1xuYWRkUmVzZWFyY2hOb2RlKEFTQ2hlbWlzdHJ5KTtcblxuY29uc3QgQVNQaHlzaWNzID0geyBpZDogJ0EmUyBQaHlzaWNzJyB9O1xuYWRkUmVzZWFyY2hOb2RlKEFTUGh5c2ljcyk7XG5cbmNvbnN0IEFTRWNvbm9taWNzID0geyBpZDogJ0EmUyBFY29ub21pY3MnIH07XG5hZGRSZXNlYXJjaE5vZGUoQVNFY29ub21pY3MpO1xuXG5jb25zdCBBU0UzQiA9IHsgaWQ6ICdBJlMgRTNCJyB9O1xuYWRkSG9tZU5vZGUoQVNFM0IpO1xuXG5jb25zdCBFSU1DSUVTSU5HZW5lcmFsID0geyBpZDogJ0VJTSBDSUVTSU4gR2VuZXJhbCcgfTtcbmFkZFJlc2VhcmNoTm9kZShFSU1DSUVTSU5HZW5lcmFsKTtcblxuY29uc3QgQlVTTGFuZ0N0ciA9IHsgaWQ6ICdCVVMgTGFuZyBDdHInIH07XG5hZGRSZXNlYXJjaE5vZGUoQlVTTGFuZ0N0cik7XG5cbmNvbnN0IEVOR0h1bWFuUmVzb3VyY2VzID0geyBpZDogJ0VORyBIdW1hbiBSZXNvdXJjZXMnIH07XG5hZGRSZXNlYXJjaE5vZGUoRU5HSHVtYW5SZXNvdXJjZXMpO1xuXG5jb25zdCBCVVNNYXJrZXRpbmcgPSB7IGlkOiAnQlVTIE1hcmtldGluZycgfTtcbmFkZFJlc2VhcmNoTm9kZShCVVNNYXJrZXRpbmcpO1xuXG5jb25zdCBFSU1SZXNlYXJjaFN1c3RQb2xpY3lNZ210ID0geyBpZDogJ0VJTSBSZXNlYXJjaCBTdXN0IFBvbGljeSBNZ210JyB9O1xuYWRkUmVzZWFyY2hOb2RlKEVJTVJlc2VhcmNoU3VzdFBvbGljeU1nbXQpO1xuXG5jb25zdCBQU1ZEUmVzZWFyY2ggPSB7IGlkOiAnUCZTIFZEIFJlc2VhcmNoJyB9O1xuYWRkUmVzZWFyY2hOb2RlKFBTVkRSZXNlYXJjaCk7XG5cbmNvbnN0IEVOR0Jpb21lZGljYWxFbmdpbmVlcmluZyA9IHsgaWQ6ICdFTkcgQmlvbWVkaWNhbCBFbmdpbmVlcmluZycgfTtcbmFkZFJlc2VhcmNoTm9kZShFTkdCaW9tZWRpY2FsRW5naW5lZXJpbmcpO1xuXG5jb25zdCBQRkhIRFBGSCA9IHsgaWQ6ICdQRkggSERQRkgnIH07XG5hZGRSZXNlYXJjaE5vZGUoUEZISERQRkgpO1xuXG5jb25zdCBTU1dPZmZpY2VvZlNwb25zb3JlZFByb2ogPSB7IGlkOiAnU1NXIE9mZmljZSBvZiBTcG9uc29yZWQgUHJvaicgfTtcbmFkZFJlc2VhcmNoTm9kZShTU1dPZmZpY2VvZlNwb25zb3JlZFByb2opO1xuXG5jb25zdCBTU1dTb2NpYWxXb3JrSW5zdHJ1Y3Rpb24gPSB7IGlkOiAnU1NXIFNvY2lhbCBXb3JrIEluc3RydWN0aW9uJyB9O1xuYWRkUmVzZWFyY2hOb2RlKFNTV1NvY2lhbFdvcmtJbnN0cnVjdGlvbik7XG5cbmNvbnN0IE5FVU1vdkRpc0NsaW5pY2FsUnNjaCA9IHsgaWQ6ICdORVUgTW92IERpcyBDbGluaWNhbCBSc2NoJyB9O1xuYWRkUmVzZWFyY2hOb2RlKE5FVU1vdkRpc0NsaW5pY2FsUnNjaCk7XG5cbmNvbnN0IFBIQUFkbWluaXN0cmF0aW9uID0geyBpZDogJ1BIQSBBZG1pbmlzdHJhdGlvbicgfTtcbmFkZFJlc2VhcmNoTm9kZShQSEFBZG1pbmlzdHJhdGlvbik7XG5cbmNvbnN0IEJVU0RlY2lzaW9uUmlza2FuZE9wZXJzID0geyBpZDogJ0JVUyBEZWNpc2lvbiwgUmlzayBhbmQgT3BlcnMnIH07XG5hZGRSZXNlYXJjaE5vZGUoQlVTRGVjaXNpb25SaXNrYW5kT3BlcnMpO1xuXG5jb25zdCBCVVNFeHRSZWxhdGlvbnNEZXZlbG9wbWVudCA9IHsgaWQ6ICdCVVMgRXh0IFJlbGF0aW9ucyAmRGV2ZWxvcG1lbnQnIH07XG5hZGRSZXNlYXJjaE5vZGUoQlVTRXh0UmVsYXRpb25zRGV2ZWxvcG1lbnQpO1xuXG5jb25zdCBaVUNGdXNpTGFiID0geyBpZDogJ1pVQyBGdXNpIExhYicgfTtcbmFkZFJlc2VhcmNoTm9kZShaVUNGdXNpTGFiKTtcblxuY29uc3QgWlVDQWJib3R0TGFiID0geyBpZDogJ1pVQyBBYmJvdHQgTGFiJyB9O1xuYWRkUmVzZWFyY2hOb2RlKFpVQ0FiYm90dExhYik7XG5cbmNvbnN0IEVJTFNlaXNtb2xvZ3lHZW9UZWN0b25waHlzID0geyBpZDogJ0VJTCBTZWlzbW9sb2d5LCBHZW8mVGVjdG9ucGh5cycgfTtcbmFkZFJlc2VhcmNoTm9kZShFSUxTZWlzbW9sb2d5R2VvVGVjdG9ucGh5cyk7XG5cbmNvbnN0IEFTUHN5Y2hvbG9neSA9IHsgaWQ6ICdBJlMgUHN5Y2hvbG9neScgfTtcbmFkZFJlc2VhcmNoTm9kZShBU1BzeWNob2xvZ3kpO1xuXG5jb25zdCBKU0JDMkIyID0geyBpZDogJ0pTQiBDMkIyJyB9O1xuYWRkUmVzZWFyY2hOb2RlKEpTQkMyQjIpO1xuXG5jb25zdCBOVVJSZXNlYXJjaE9wZXJhdGlvbnMgPSB7IGlkOiAnTlVSIFJlc2VhcmNoIE9wZXJhdGlvbnMnIH07XG5hZGRSZXNlYXJjaE5vZGUoTlVSUmVzZWFyY2hPcGVyYXRpb25zKTtcblxuY29uc3QgRUlNQ0NTUjAxID0geyBpZDogJ0VJTSBDQ1NSLSAwMScgfTtcbmFkZFJlc2VhcmNoTm9kZShFSU1DQ1NSMDEpO1xuXG5jb25zdCBKUk5DZW50ZXJzID0geyBpZDogJ0pSTiBDZW50ZXJzJyB9O1xuYWRkUmVzZWFyY2hOb2RlKEpSTkNlbnRlcnMpO1xuXG5jb25zdCBCVVNNYW5hZ2VtZW50ID0geyBpZDogJ0JVUyBNYW5hZ2VtZW50JyB9O1xuYWRkSG9tZU5vZGUoQlVTTWFuYWdlbWVudCk7XG5cbmNvbnN0IFBSVlByb3Zvc3RPZmZpY2UgPSB7IGlkOiAnUFJWIFByb3Zvc3QgT2ZmaWNlJyB9O1xuYWRkUmVzZWFyY2hOb2RlKFBSVlByb3Zvc3RPZmZpY2UpO1xuXG5jb25zdCBFTkdJRU9SRmFjdWx0eSA9IHsgaWQ6ICdFTkcgSUVPUiBGYWN1bHR5JyB9O1xuYWRkUmVzZWFyY2hOb2RlKEVOR0lFT1JGYWN1bHR5KTtcblxuY29uc3QgT0FEQ0VudHJlcHJlbmV1cnNoaXAgPSB7IGlkOiAnT0FEIEMtRW50cmVwcmVuZXVyc2hpcCcgfTtcbmFkZFJlc2VhcmNoTm9kZShPQURDRW50cmVwcmVuZXVyc2hpcCk7XG5cbmNvbnN0IE1FRENhcmRpb2xvZ3kgPSB7IGlkOiAnTUVEIENhcmRpb2xvZ3knIH07XG5hZGRSZXNlYXJjaE5vZGUoTUVEQ2FyZGlvbG9neSk7XG5cbmNvbnN0IFJFU0NvcmVPcGVyYXRpb25zID0geyBpZDogJ1JFUyBDb3JlIE9wZXJhdGlvbnMnIH07XG5hZGRSZXNlYXJjaE5vZGUoUkVTQ29yZU9wZXJhdGlvbnMpO1xuXG5jb25zdCBBU0VhcnRoRW52aXJvblNjaSA9IHsgaWQ6ICdBJlMgRWFydGggJiBFbnZpcm9uIFNjaScgfTtcbmFkZEhvbWVOb2RlKEFTRWFydGhFbnZpcm9uU2NpKTtcblxuY29uc3QgQlVTRmluYW5jZUVjb25vbWljcyA9IHsgaWQ6ICdCVVMgRmluYW5jZSAmIEVjb25vbWljcycgfTtcbmFkZEhvbWVOb2RlKEJVU0ZpbmFuY2VFY29ub21pY3MpO1xuXG5jb25zdCBTTVNTb2Npb21lZGljYWxTY2llbmNlID0geyBpZDogJ1NNUyBTb2Npb21lZGljYWwgU2NpZW5jZScgfTtcbmFkZFJlc2VhcmNoTm9kZShTTVNTb2Npb21lZGljYWxTY2llbmNlKTtcblxuY29uc3QgTUhFU29jaWV0eU1lZGljaW5lID0geyBpZDogJ01IRSBTb2NpZXR5ICYgTWVkaWNpbmUnIH07XG5hZGRSZXNlYXJjaE5vZGUoTUhFU29jaWV0eU1lZGljaW5lKTtcblxuY29uc3QgRVBJRXBpZGVtaW9sb2d5ID0geyBpZDogJ0VQSSBFcGlkZW1pb2xvZ3knIH07XG5hZGRSZXNlYXJjaE5vZGUoRVBJRXBpZGVtaW9sb2d5KTtcblxuY29uc3QgSElDQ29yZUJpb3N0YXRpc3RpY3MgPSB7IGlkOiAnSElDIENvcmUgQmlvc3RhdGlzdGljcycgfTtcbmFkZFJlc2VhcmNoTm9kZShISUNDb3JlQmlvc3RhdGlzdGljcyk7XG5cbmNvbnN0IEFTTWF0aGVtYXRpY3MgPSB7IGlkOiAnQSZTIE1hdGhlbWF0aWNzJyB9O1xuYWRkUmVzZWFyY2hOb2RlKEFTTWF0aGVtYXRpY3MpO1xuXG5jb25zdCBCVVNEZWFuc09mZmljZSA9IHsgaWQ6ICdCVVMgRGVhblxcJ3MgT2ZmaWNlJyB9O1xuYWRkUmVzZWFyY2hOb2RlKEJVU0RlYW5zT2ZmaWNlKTtcblxuY29uc3QgQlVTQ0lUSSA9IHsgaWQ6ICdCVVMgQ0lUSScgfTtcbmFkZFJlc2VhcmNoTm9kZShCVVNDSVRJKTtcblxuY29uc3QgRUhTRW52aXJvbm1lbnRIZWFsdGhTY2llbmNlID0geyBpZDogJ0VIUyBFbnZpcm9ubWVudCBIZWFsdGggU2NpZW5jZScgfTtcbmFkZFJlc2VhcmNoTm9kZShFSFNFbnZpcm9ubWVudEhlYWx0aFNjaWVuY2UpO1xuXG5jb25zdCBDVFZTdHJhdGVnaWNJbml0aWF0aXZlcyA9IHsgaWQ6ICdDVFYgU3RyYXRlZ2ljIEluaXRpYXRpdmVzJyB9O1xuYWRkUmVzZWFyY2hOb2RlKENUVlN0cmF0ZWdpY0luaXRpYXRpdmVzKTtcblxuY29uc3QgQlVTQ3RyZm9yRGVjaXNpb25TY2llbmNlcyA9IHsgaWQ6ICdCVVMgQ3RyIGZvciBEZWNpc2lvbiBTY2llbmNlcycgfTtcbmFkZEhvbWVOb2RlKEJVU0N0cmZvckRlY2lzaW9uU2NpZW5jZXMpO1xuXG5jb25zdCBCU1RCaW9zdGF0aXN0aWNzID0geyBpZDogJ0JTVCBCaW9zdGF0aXN0aWNzJyB9O1xuYWRkSG9tZU5vZGUoQlNUQmlvc3RhdGlzdGljcyk7XG5cbmNvbnN0IEVJTE1hcmluZUdlb2xvZ3lHZW9waHlzaWMgPSB7IGlkOiAnRUlMIE1hcmluZSBHZW9sb2d5ICYgR2VvcGh5c2ljJyB9O1xuYWRkUmVzZWFyY2hOb2RlKEVJTE1hcmluZUdlb2xvZ3lHZW9waHlzaWMpO1xuXG5jb25zdCBFTkdDVk4gPSB7IGlkOiAnRU5HIENWTicgfTtcbmFkZFJlc2VhcmNoTm9kZShFTkdDVk4pO1xuXG5jb25zdCBCVVNGaW5hbmNlRGVwdEFkbWluID0geyBpZDogJ0JVUyBGaW5hbmNlIERlcHQgQWRtaW4nIH07XG5hZGRIb21lTm9kZShCVVNGaW5hbmNlRGVwdEFkbWluKTtcblxuY29uc3QgQVNTb2Npb2xvZ3kgPSB7IGlkOiAnQSZTIFNvY2lvbG9neScgfTtcbmFkZFJlc2VhcmNoTm9kZShBU1NvY2lvbG9neSk7XG5cbmNvbnN0IEFTU3RhdGlzdGljcyA9IHsgaWQ6ICdBJlMgU3RhdGlzdGljcycgfTtcbmFkZFJlc2VhcmNoTm9kZShBU1N0YXRpc3RpY3MpO1xuXG5jb25zdCBFTkdDQ0xTUmVzZWFyY2ggPSB7IGlkOiAnRU5HIENDTFMgUmVzZWFyY2gnIH07XG5hZGREU0lOb2RlKEVOR0NDTFNSZXNlYXJjaCk7XG5cbmNvbnN0IEVOR0RBVEFTQ0lFTkNFUmVzZWFyY2ggPSB7IGlkOiAnRU5HIERBVEEgU0NJRU5DRSBSZXNlYXJjaCcgfTtcbmFkZERTSU5vZGUoRU5HREFUQVNDSUVOQ0VSZXNlYXJjaCk7XG5cbmNvbnN0IEVOR0RBVEFTQ0lFTkNFID0geyBpZDogJ0VORyBEQVRBIFNDSUVOQ0UnIH07XG5hZGREU0lOb2RlKEVOR0RBVEFTQ0lFTkNFKTtcblxuY29uc3QgRFNJUmVzZWFyY2hHZW5lcmFsID0geyBpZDogJ0RTSSBSZXNlYXJjaCBHZW5lcmFsJyB9O1xuYWRkRFNJTm9kZShEU0lSZXNlYXJjaEdlbmVyYWwpO1xuXG5jb25zdCBEU0lSZXNlYXJjaFNUQVRTID0geyBpZDogJ0RTSSBSZXNlYXJjaCBTVEFUUycgfTtcbmFkZERTSU5vZGUoRFNJUmVzZWFyY2hTVEFUUyk7XG5cbmNvbnN0IEVOR0NDTFMgPSB7IGlkOiAnRU5HIENDTFMnIH07XG5hZGREU0lOb2RlKEVOR0NDTFMpO1xuXG5jb25zdCBFTkdEQVRBU0NJRU5DRUdlbmVyYWwgPSB7IGlkOiAnRU5HIERBVEEgU0NJRU5DRSBHZW5lcmFsJyB9O1xuYWRkRFNJTm9kZShFTkdEQVRBU0NJRU5DRUdlbmVyYWwpO1xuXG4vLyBjb25zdCBjZW50ZXIgPSB7IGlkOiAnRFNJJyB9O1xuLy8gYWRkQ2VudGVyTm9kZShjZW50ZXIpO1xuXG5cbmNvbm5lY3RSZXNlYXJjaE5vZGVzKEFTQmlvbG9naWNhbFNjaWVuY2VzLCBFTkdEQVRBU0NJRU5DRVJlc2VhcmNoKTtcbmNvbm5lY3ROb2RlcyhBU0NlbnRlcnMsIEVOR0NDTFNSZXNlYXJjaCk7XG5jb25uZWN0UmVzZWFyY2hOb2RlcyhBU0NoZW1pc3RyeSwgRU5HREFUQVNDSUVOQ0VSZXNlYXJjaCk7XG5jb25uZWN0Tm9kZXMoQVNDb2x1bWJpYUFzdHJvcGh5c2ljc0xhYiwgRFNJUmVzZWFyY2hHZW5lcmFsKTtcbmNvbm5lY3ROb2RlcyhBU0NvbHVtYmlhQXN0cm9waHlzaWNzTGFiLCBEU0lSZXNlYXJjaFNUQVRTKTtcbmNvbm5lY3ROb2RlcyhBU0NvbHVtYmlhQXN0cm9waHlzaWNzTGFiLCBFTkdDQ0xTUmVzZWFyY2gpO1xuY29ubmVjdE5vZGVzKEFTQ29sdW1iaWFBc3Ryb3BoeXNpY3NMYWIsIEVOR0RBVEFTQ0lFTkNFR2VuZXJhbCk7XG5jb25uZWN0UmVzZWFyY2hOb2RlcyhBU0NvbHVtYmlhQXN0cm9waHlzaWNzTGFiLCBFTkdEQVRBU0NJRU5DRVJlc2VhcmNoKTtcbmNvbm5lY3ROb2RlcyhBU0UzQiwgRU5HREFUQVNDSUVOQ0VHZW5lcmFsKTtcbmNvbm5lY3ROb2RlcyhBU0VhcnRoRW52aXJvblNjaSwgRFNJUmVzZWFyY2hHZW5lcmFsKTtcbmNvbm5lY3RSZXNlYXJjaE5vZGVzKEFTRWNvbm9taWNzLCBFTkdEQVRBU0NJRU5DRVJlc2VhcmNoKTtcbmNvbm5lY3ROb2RlcyhBU0VuZ2xpc2hDb21wYXJhdGl2ZUxpdCwgRU5HQ0NMU1Jlc2VhcmNoKTtcbmNvbm5lY3ROb2RlcyhBU0lTRVJQUmVzZWFyY2gsIERTSVJlc2VhcmNoU1RBVFMpO1xuY29ubmVjdE5vZGVzKEFTSVNFUlBSZXNlYXJjaCwgRU5HQ0NMU1Jlc2VhcmNoKTtcbmNvbm5lY3RSZXNlYXJjaE5vZGVzKEFTTWF0aGVtYXRpY3MsIEVOR0RBVEFTQ0lFTkNFUmVzZWFyY2gpO1xuY29ubmVjdFJlc2VhcmNoTm9kZXMoQVNQaHlzaWNzLCBFTkdEQVRBU0NJRU5DRVJlc2VhcmNoKTtcbmNvbm5lY3RSZXNlYXJjaE5vZGVzKEFTUG9saXRpY2FsU2NpZW5jZSwgRU5HREFUQVNDSUVOQ0VSZXNlYXJjaCk7XG5jb25uZWN0Tm9kZXMoQVNQc3ljaG9sb2d5LCBEU0lSZXNlYXJjaEdlbmVyYWwpO1xuY29ubmVjdFJlc2VhcmNoTm9kZXMoQVNQc3ljaG9sb2d5LCBFTkdEQVRBU0NJRU5DRVJlc2VhcmNoKTtcbmNvbm5lY3ROb2RlcyhBU1NvY2lvbG9neSwgRFNJUmVzZWFyY2hTVEFUUyk7XG5jb25uZWN0Tm9kZXMoQVNTb2Npb2xvZ3ksIEVOR0NDTFNSZXNlYXJjaCk7XG5jb25uZWN0UmVzZWFyY2hOb2RlcyhBU1NvY2lvbG9neSwgRU5HREFUQVNDSUVOQ0VSZXNlYXJjaCk7XG5jb25uZWN0Tm9kZXMoQVNTdGF0aXN0aWNzLCBEU0lSZXNlYXJjaEdlbmVyYWwpO1xuY29ubmVjdE5vZGVzKEFTU3RhdGlzdGljcywgRFNJUmVzZWFyY2hTVEFUUyk7XG5jb25uZWN0Tm9kZXMoQVNTdGF0aXN0aWNzLCBFTkdEQVRBU0NJRU5DRUdlbmVyYWwpO1xuY29ubmVjdFJlc2VhcmNoTm9kZXMoQVNTdGF0aXN0aWNzLCBFTkdEQVRBU0NJRU5DRVJlc2VhcmNoKTtcbmNvbm5lY3RSZXNlYXJjaE5vZGVzKEFSSEluc3RydWN0aW9uLCBFTkdEQVRBU0NJRU5DRVJlc2VhcmNoKTtcbmNvbm5lY3ROb2RlcyhCU1RCaW9zdGF0aXN0aWNzLCBEU0lSZXNlYXJjaEdlbmVyYWwpO1xuY29ubmVjdE5vZGVzKEJVU0NJVEksIERTSVJlc2VhcmNoR2VuZXJhbCk7XG5jb25uZWN0UmVzZWFyY2hOb2RlcyhCVVNDSVRJLCBFTkdEQVRBU0NJRU5DRVJlc2VhcmNoKTtcbmNvbm5lY3ROb2RlcyhCVVNDdHJmb3JEZWNpc2lvblNjaWVuY2VzLCBEU0lSZXNlYXJjaEdlbmVyYWwpO1xuY29ubmVjdE5vZGVzKEJVU0RlYW5zT2ZmaWNlLCBEU0lSZXNlYXJjaEdlbmVyYWwpO1xuY29ubmVjdFJlc2VhcmNoTm9kZXMoQlVTRGVhbnNPZmZpY2UsIEVOR0RBVEFTQ0lFTkNFUmVzZWFyY2gpO1xuY29ubmVjdFJlc2VhcmNoTm9kZXMoQlVTRGVjaXNpb25SaXNrYW5kT3BlcnMsIEVOR0RBVEFTQ0lFTkNFUmVzZWFyY2gpO1xuY29ubmVjdFJlc2VhcmNoTm9kZXMoQlVTRXh0UmVsYXRpb25zRGV2ZWxvcG1lbnQsIEVOR0RBVEFTQ0lFTkNFUmVzZWFyY2gpO1xuY29ubmVjdE5vZGVzKEJVU0ZpbmFuY2VFY29ub21pY3MsIERTSVJlc2VhcmNoR2VuZXJhbCk7XG5jb25uZWN0Tm9kZXMoQlVTRmluYW5jZURlcHRBZG1pbiwgRFNJUmVzZWFyY2hHZW5lcmFsKTtcbmNvbm5lY3RSZXNlYXJjaE5vZGVzKEJVU0xhbmdDdHIsIEVOR0RBVEFTQ0lFTkNFUmVzZWFyY2gpO1xuY29ubmVjdE5vZGVzKEJVU01hbmFnZW1lbnQsIERTSVJlc2VhcmNoR2VuZXJhbCk7XG5jb25uZWN0Tm9kZXMoQlVTTWFya2V0aW5nLCBEU0lSZXNlYXJjaEdlbmVyYWwpO1xuY29ubmVjdFJlc2VhcmNoTm9kZXMoQlVTTWFya2V0aW5nLCBFTkdEQVRBU0NJRU5DRVJlc2VhcmNoKTtcbmNvbm5lY3ROb2RlcyhDSVRSZXNlYXJjaFNlcnZpY2VzLCBFTkdDQ0xTUmVzZWFyY2gpO1xuY29ubmVjdFJlc2VhcmNoTm9kZXMoQ0lUUmVzZWFyY2hTZXJ2aWNlcywgRU5HREFUQVNDSUVOQ0VSZXNlYXJjaCk7XG5jb25uZWN0UmVzZWFyY2hOb2RlcyhDVFZTdHJhdGVnaWNJbml0aWF0aXZlcywgRU5HREFUQVNDSUVOQ0VSZXNlYXJjaCk7XG5jb25uZWN0Tm9kZXMoREJNREJNSSwgRFNJUmVzZWFyY2hHZW5lcmFsKTtcbmNvbm5lY3RSZXNlYXJjaE5vZGVzKERCTURCTUksIEVOR0RBVEFTQ0lFTkNFUmVzZWFyY2gpO1xuY29ubmVjdE5vZGVzKERTSUdlbmVyYWwsIERTSVJlc2VhcmNoR2VuZXJhbCk7XG5jb25uZWN0Tm9kZXMoRFNJR2VuZXJhbCwgRFNJUmVzZWFyY2hTVEFUUyk7XG5jb25uZWN0Tm9kZXMoRFNJR2VuZXJhbCwgRU5HQ0NMU1Jlc2VhcmNoKTtcbmNvbm5lY3ROb2RlcyhEU0lHZW5lcmFsLCBFTkdEQVRBU0NJRU5DRSk7XG5jb25uZWN0Tm9kZXMoRFNJR2VuZXJhbCwgRU5HREFUQVNDSUVOQ0VHZW5lcmFsKTtcbmNvbm5lY3RSZXNlYXJjaE5vZGVzKERTSUdlbmVyYWwsIEVOR0RBVEFTQ0lFTkNFUmVzZWFyY2gpO1xuY29ubmVjdFJlc2VhcmNoTm9kZXMoRUhTRW52aXJvbm1lbnRIZWFsdGhTY2llbmNlLCBFTkdEQVRBU0NJRU5DRVJlc2VhcmNoKTtcbmNvbm5lY3RSZXNlYXJjaE5vZGVzKEVJTENlbnRyYWxBZG1pbmlzdHJhdGlvbiwgRU5HREFUQVNDSUVOQ0VSZXNlYXJjaCk7XG5jb25uZWN0UmVzZWFyY2hOb2RlcyhFSUxHZW9jaGVtaXN0cnksIEVOR0RBVEFTQ0lFTkNFUmVzZWFyY2gpO1xuY29ubmVjdFJlc2VhcmNoTm9kZXMoRUlMR3JhbnRzYW5kQ29udHJhY3RzLCBFTkdEQVRBU0NJRU5DRVJlc2VhcmNoKTtcbmNvbm5lY3RSZXNlYXJjaE5vZGVzKEVJTE1hcmluZUdlb2xvZ3lHZW9waHlzaWMsIEVOR0RBVEFTQ0lFTkNFUmVzZWFyY2gpO1xuY29ubmVjdFJlc2VhcmNoTm9kZXMoRUlMT2NlYW5hbmRDbGltYXRlUGh5c2ljcywgRU5HREFUQVNDSUVOQ0VSZXNlYXJjaCk7XG5jb25uZWN0UmVzZWFyY2hOb2RlcyhFSUxTZWlzbW9sb2d5R2VvVGVjdG9ucGh5cywgRU5HREFUQVNDSUVOQ0VSZXNlYXJjaCk7XG5jb25uZWN0UmVzZWFyY2hOb2RlcyhFSU1DQ1NSMDEsIEVOR0RBVEFTQ0lFTkNFUmVzZWFyY2gpO1xuY29ubmVjdFJlc2VhcmNoTm9kZXMoRUlNQ0lFU0lOR2VuZXJhbCwgRU5HREFUQVNDSUVOQ0VSZXNlYXJjaCk7XG5jb25uZWN0UmVzZWFyY2hOb2RlcyhFSU1SZXNlYXJjaFN1c3RQb2xpY3lNZ210LCBFTkdEQVRBU0NJRU5DRVJlc2VhcmNoKTtcbmNvbm5lY3ROb2RlcyhFTkdBZG1pbmlzdHJhdGlvbiwgRU5HQ0NMU1Jlc2VhcmNoKTtcbmNvbm5lY3RSZXNlYXJjaE5vZGVzKEVOR0FkbWluaXN0cmF0aW9uLCBFTkdEQVRBU0NJRU5DRVJlc2VhcmNoKTtcbmNvbm5lY3ROb2RlcyhFTkdBZG1pbmlzdHJhdGlvbiwgRU5HREFUQVNDSUVOQ0VHZW5lcmFsKTtcbmNvbm5lY3ROb2RlcyhFTkdBcHBsUGh5c2ljc0FwcGxNYXRoLCBEU0lSZXNlYXJjaEdlbmVyYWwpO1xuY29ubmVjdE5vZGVzKEVOR0FwcGxQaHlzaWNzQXBwbE1hdGgsIEVOR0RBVEFTQ0lFTkNFR2VuZXJhbCk7XG5jb25uZWN0UmVzZWFyY2hOb2RlcyhFTkdBcHBsUGh5c2ljc0FwcGxNYXRoLCBFTkdEQVRBU0NJRU5DRVJlc2VhcmNoKTtcbmNvbm5lY3RSZXNlYXJjaE5vZGVzKEVOR0Jpb21lZGljYWxFbmdpbmVlcmluZywgRU5HREFUQVNDSUVOQ0VSZXNlYXJjaCk7XG5jb25uZWN0Tm9kZXMoRU5HQ0NMUywgRU5HQ0NMUyk7XG5jb25uZWN0Tm9kZXMoRU5HQ0NMUywgRU5HQ0NMU1Jlc2VhcmNoKTtcbmNvbm5lY3RSZXNlYXJjaE5vZGVzKEVOR0NWTiwgRU5HREFUQVNDSUVOQ0VSZXNlYXJjaCk7XG5jb25uZWN0Tm9kZXMoRU5HQ2hlbWljYWxFbmdpbmVlcmluZywgRU5HREFUQVNDSUVOQ0VHZW5lcmFsKTtcbmNvbm5lY3RSZXNlYXJjaE5vZGVzKEVOR0NoZW1pY2FsRW5naW5lZXJpbmcsIEVOR0RBVEFTQ0lFTkNFUmVzZWFyY2gpO1xuY29ubmVjdFJlc2VhcmNoTm9kZXMoRU5HQ2l2aWxFbmdyRW5nck1lY2hhLCBFTkdEQVRBU0NJRU5DRVJlc2VhcmNoKTtcbmNvbm5lY3ROb2RlcyhFTkdDb21wdXRlclNjaWVuY2UsIERTSVJlc2VhcmNoR2VuZXJhbCk7XG5jb25uZWN0Tm9kZXMoRU5HQ29tcHV0ZXJTY2llbmNlLCBEU0lSZXNlYXJjaFNUQVRTKTtcbmNvbm5lY3ROb2RlcyhFTkdDb21wdXRlclNjaWVuY2UsIEVOR0NDTFMpO1xuY29ubmVjdE5vZGVzKEVOR0NvbXB1dGVyU2NpZW5jZSwgRU5HQ0NMU1Jlc2VhcmNoKTtcbmNvbm5lY3ROb2RlcyhFTkdDb21wdXRlclNjaWVuY2UsIEVOR0RBVEFTQ0lFTkNFKTtcbmNvbm5lY3ROb2RlcyhFTkdDb21wdXRlclNjaWVuY2UsIEVOR0RBVEFTQ0lFTkNFR2VuZXJhbCk7XG5jb25uZWN0UmVzZWFyY2hOb2RlcyhFTkdDb21wdXRlclNjaWVuY2UsIEVOR0RBVEFTQ0lFTkNFUmVzZWFyY2gpO1xuY29ubmVjdFJlc2VhcmNoTm9kZXMoRU5HREFUQVNDSUVOQ0VHZW5lcmFsLCBFTkdEQVRBU0NJRU5DRVJlc2VhcmNoKTtcbmNvbm5lY3ROb2RlcyhFTkdFYXJ0aEVudmlyb25tZW50YWxFbmdyLCBEU0lSZXNlYXJjaEdlbmVyYWwpO1xuY29ubmVjdE5vZGVzKEVOR0VhcnRoRW52aXJvbm1lbnRhbEVuZ3IsIEVOR0RBVEFTQ0lFTkNFR2VuZXJhbCk7XG5jb25uZWN0UmVzZWFyY2hOb2RlcyhFTkdFYXJ0aEVudmlyb25tZW50YWxFbmdyLCBFTkdEQVRBU0NJRU5DRVJlc2VhcmNoKTtcbmNvbm5lY3ROb2RlcyhFTkdFbGVjdHJpY2FsRW5naW5lZXJpbmcsIERTSVJlc2VhcmNoR2VuZXJhbCk7XG5jb25uZWN0Tm9kZXMoRU5HRWxlY3RyaWNhbEVuZ2luZWVyaW5nLCBFTkdDQ0xTUmVzZWFyY2gpO1xuY29ubmVjdE5vZGVzKEVOR0VsZWN0cmljYWxFbmdpbmVlcmluZywgRU5HREFUQVNDSUVOQ0UpO1xuY29ubmVjdE5vZGVzKEVOR0VsZWN0cmljYWxFbmdpbmVlcmluZywgRU5HREFUQVNDSUVOQ0VHZW5lcmFsKTtcbmNvbm5lY3RSZXNlYXJjaE5vZGVzKEVOR0VsZWN0cmljYWxFbmdpbmVlcmluZywgRU5HREFUQVNDSUVOQ0VSZXNlYXJjaCk7XG5jb25uZWN0UmVzZWFyY2hOb2RlcyhFTkdIdW1hblJlc291cmNlcywgRU5HREFUQVNDSUVOQ0VSZXNlYXJjaCk7XG5jb25uZWN0UmVzZWFyY2hOb2RlcyhFTkdJRU9SRmFjdWx0eSwgRU5HREFUQVNDSUVOQ0VSZXNlYXJjaCk7XG5jb25uZWN0Tm9kZXMoRU5HSUVPUkdlbmVyYWwsIEVOR0NDTFMpO1xuY29ubmVjdE5vZGVzKEVOR0luZHVzdHJpYWxFbmdyT1IsIERTSVJlc2VhcmNoR2VuZXJhbCk7XG5jb25uZWN0Tm9kZXMoRU5HSW5kdXN0cmlhbEVuZ3JPUiwgRU5HQ0NMU1Jlc2VhcmNoKTtcbmNvbm5lY3RSZXNlYXJjaE5vZGVzKEVOR0luZHVzdHJpYWxFbmdyT1IsIEVOR0RBVEFTQ0lFTkNFUmVzZWFyY2gpO1xuY29ubmVjdE5vZGVzKEVOR01lY2hhbmljYWxFbmdpbmVlcmluZywgRFNJUmVzZWFyY2hHZW5lcmFsKTtcbmNvbm5lY3ROb2RlcyhFTkdNZWNoYW5pY2FsRW5naW5lZXJpbmcsIEVOR0RBVEFTQ0lFTkNFR2VuZXJhbCk7XG5jb25uZWN0UmVzZWFyY2hOb2RlcyhFTkdNZWNoYW5pY2FsRW5naW5lZXJpbmcsIEVOR0RBVEFTQ0lFTkNFUmVzZWFyY2gpO1xuY29ubmVjdFJlc2VhcmNoTm9kZXMoRVBJRXBpZGVtaW9sb2d5LCBFTkdEQVRBU0NJRU5DRVJlc2VhcmNoKTtcbmNvbm5lY3ROb2RlcyhHRVVGQkVSZXRpcmVtZW50UGxhbiwgRFNJUmVzZWFyY2hHZW5lcmFsKTtcbmNvbm5lY3RSZXNlYXJjaE5vZGVzKEdFVUZCRVJldGlyZW1lbnRQbGFuLCBFTkdEQVRBU0NJRU5DRVJlc2VhcmNoKTtcbmNvbm5lY3RSZXNlYXJjaE5vZGVzKEhJQ0NvcmVCaW9zdGF0aXN0aWNzLCBFTkdEQVRBU0NJRU5DRVJlc2VhcmNoKTtcbmNvbm5lY3RSZXNlYXJjaE5vZGVzKElQQUFjYWRlbWljRGVwdFNJUEEsIEVOR0RBVEFTQ0lFTkNFUmVzZWFyY2gpO1xuY29ubmVjdE5vZGVzKEpSTkFjYWRlbWljcywgRFNJUmVzZWFyY2hTVEFUUyk7XG5jb25uZWN0Tm9kZXMoSlJOQWNhZGVtaWNzLCBFTkdDQ0xTUmVzZWFyY2gpO1xuY29ubmVjdFJlc2VhcmNoTm9kZXMoSlJOQ2VudGVycywgRU5HREFUQVNDSUVOQ0VSZXNlYXJjaCk7XG5jb25uZWN0UmVzZWFyY2hOb2RlcyhKU0JDMkIyLCBFTkdEQVRBU0NJRU5DRVJlc2VhcmNoKTtcbmNvbm5lY3RSZXNlYXJjaE5vZGVzKExBV0FjYWRlbWljRGVwYXJ0bWVudExhdywgRU5HREFUQVNDSUVOQ0VSZXNlYXJjaCk7XG5jb25uZWN0UmVzZWFyY2hOb2RlcyhNRURDYXJkaW9sb2d5LCBFTkdEQVRBU0NJRU5DRVJlc2VhcmNoKTtcbmNvbm5lY3ROb2RlcyhNRURSaGV1bWF0b2xvZ3ksIEVOR0RBVEFTQ0lFTkNFKTtcbmNvbm5lY3RSZXNlYXJjaE5vZGVzKE1FRFJoZXVtYXRvbG9neSwgRU5HREFUQVNDSUVOQ0VSZXNlYXJjaCk7XG5jb25uZWN0UmVzZWFyY2hOb2RlcyhNSEVTb2NpZXR5TWVkaWNpbmUsIEVOR0RBVEFTQ0lFTkNFUmVzZWFyY2gpO1xuY29ubmVjdFJlc2VhcmNoTm9kZXMoTUlDTWljcm9iaW9sb2d5LCBFTkdEQVRBU0NJRU5DRVJlc2VhcmNoKTtcbmNvbm5lY3ROb2RlcyhORVVDaGFpcnNvZmZpY2UsIEVOR0NDTFNSZXNlYXJjaCk7XG5jb25uZWN0UmVzZWFyY2hOb2RlcyhORVVDaGFpcnNvZmZpY2UsIEVOR0RBVEFTQ0lFTkNFUmVzZWFyY2gpO1xuY29ubmVjdFJlc2VhcmNoTm9kZXMoTkVVTW92RGlzQ2xpbmljYWxSc2NoLCBFTkdEQVRBU0NJRU5DRVJlc2VhcmNoKTtcbmNvbm5lY3ROb2RlcyhOVVJSZXNlYXJjaE9wZXJhdGlvbnMsIERTSVJlc2VhcmNoR2VuZXJhbCk7XG5jb25uZWN0UmVzZWFyY2hOb2RlcyhOVVJSZXNlYXJjaE9wZXJhdGlvbnMsIEVOR0RBVEFTQ0lFTkNFUmVzZWFyY2gpO1xuY29ubmVjdFJlc2VhcmNoTm9kZXMoT0FEQ0VudHJlcHJlbmV1cnNoaXAsIEVOR0RBVEFTQ0lFTkNFUmVzZWFyY2gpO1xuY29ubmVjdE5vZGVzKE9CR01GTSwgRU5HQ0NMU1Jlc2VhcmNoKTtcbmNvbm5lY3RSZXNlYXJjaE5vZGVzKFBTVkRSZXNlYXJjaCwgRU5HREFUQVNDSUVOQ0VSZXNlYXJjaCk7XG5jb25uZWN0UmVzZWFyY2hOb2RlcyhQRkhIRFBGSCwgRU5HREFUQVNDSUVOQ0VSZXNlYXJjaCk7XG5jb25uZWN0UmVzZWFyY2hOb2RlcyhQSEFBZG1pbmlzdHJhdGlvbiwgRU5HREFUQVNDSUVOQ0VSZXNlYXJjaCk7XG5jb25uZWN0UmVzZWFyY2hOb2RlcyhQUkVPZmZpY2VvZnRoZVByZXNpZGVudCwgRU5HREFUQVNDSUVOQ0VSZXNlYXJjaCk7XG5jb25uZWN0UmVzZWFyY2hOb2RlcyhQUlZQcm92b3N0T2ZmaWNlLCBFTkdEQVRBU0NJRU5DRVJlc2VhcmNoKTtcbmNvbm5lY3RSZXNlYXJjaE5vZGVzKFJFU0NvcmVPcGVyYXRpb25zLCBFTkdEQVRBU0NJRU5DRVJlc2VhcmNoKTtcbmNvbm5lY3RSZXNlYXJjaE5vZGVzKFNNU1NvY2lvbWVkaWNhbFNjaWVuY2UsIEVOR0RBVEFTQ0lFTkNFUmVzZWFyY2gpO1xuY29ubmVjdFJlc2VhcmNoTm9kZXMoU1NXT2ZmaWNlb2ZTcG9uc29yZWRQcm9qLCBFTkdEQVRBU0NJRU5DRVJlc2VhcmNoKTtcbmNvbm5lY3ROb2RlcyhTU1dTb2NpYWxXb3JrSW5zdHJ1Y3Rpb24sIERTSVJlc2VhcmNoR2VuZXJhbCk7XG5jb25uZWN0Tm9kZXMoU1NXU29jaWFsV29ya0luc3RydWN0aW9uLCBEU0lSZXNlYXJjaFNUQVRTKTtcbmNvbm5lY3RSZXNlYXJjaE5vZGVzKFNTV1NvY2lhbFdvcmtJbnN0cnVjdGlvbiwgRU5HREFUQVNDSUVOQ0VSZXNlYXJjaCk7XG5jb25uZWN0UmVzZWFyY2hOb2RlcyhaVUNBYmJvdHRMYWIsIEVOR0RBVEFTQ0lFTkNFUmVzZWFyY2gpO1xuY29ubmVjdFJlc2VhcmNoTm9kZXMoWlVDRnVzaUxhYiwgRU5HREFUQVNDSUVOQ0VSZXNlYXJjaCk7XG5cblxuXG4vLyBjb25uZWN0Q2VudGVyTm9kZXMoY2VudGVyLCBFTkdDQ0xTUmVzZWFyY2gpO1xuLy8gY29ubmVjdENlbnRlck5vZGVzKGNlbnRlciwgRU5HQ0NMUyk7XG4vLyBjb25uZWN0Q2VudGVyTm9kZXMoY2VudGVyLCBFTkdEQVRBU0NJRU5DRUdlbmVyYWwpO1xuLy8gY29ubmVjdENlbnRlck5vZGVzKGNlbnRlciwgRU5HREFUQVNDSUVOQ0VSZXNlYXJjaCk7XG4vLyBjb25uZWN0Q2VudGVyTm9kZXMoY2VudGVyLCBFTkdEQVRBU0NJRU5DRSk7XG4vLyBjb25uZWN0Q2VudGVyTm9kZXMoY2VudGVyLCBEU0lSZXNlYXJjaEdlbmVyYWwpO1xuLy8gY29ubmVjdENlbnRlck5vZGVzKGNlbnRlciwgRFNJUmVzZWFyY2hTVEFUUyk7XG5cblxuXG5cblxuXG5cbiIsImltcG9ydCB7XG4gIHNlbGVjdCxcbiAgZm9yY2VTaW11bGF0aW9uLFxuICBmb3JjZU1hbnlCb2R5LFxuICBmb3JjZUxpbmssXG4gIGZvcmNlQ2VudGVyLFxuICBkcmFnLFxufSBmcm9tICdkMyc7XG5cbmltcG9ydCB7IG5vZGVzLCBSZXNlYXJjaG5vZGVzLCBsaW5rcywgTUFOWV9CT0RZX1NUUkVOR1RILFJFU0VBUkNIX1NUUkVOR1RIIH0gZnJvbSAnLi9kYXRhJztcblxuY29uc3Qgc3ZnID0gc2VsZWN0KCdzdmcnKTtcbmNvbnN0IHdpZHRoID0gK3N2Zy5hdHRyKCd3aWR0aCcpO1xuY29uc3QgaGVpZ2h0ID0gK3N2Zy5hdHRyKCdoZWlnaHQnKTtcbmNvbnN0IGNlbnRlclggPSB3aWR0aCAvIDIuMjtcbmNvbnN0IGNlbnRlclkgPSBoZWlnaHQgLyAzO1xuXG5jb25zdCBzaW11bGF0aW9uMiA9IGZvcmNlU2ltdWxhdGlvbihSZXNlYXJjaG5vZGVzKVxuICAuZm9yY2UoJ2NoYXJnZScsIGZvcmNlTWFueUJvZHkoKS5zdHJlbmd0aChSRVNFQVJDSF9TVFJFTkdUSCkuZGlzdGFuY2VNYXgoODAwKSlcbiAgLmZvcmNlKFxuICAgICdsaW5rJyxcbiAgICBmb3JjZUxpbmsobGlua3MpLmRpc3RhbmNlKChsaW5rKSA9PiBsaW5rLmRpc3RhbmNlKVxuICApXG4gIC5mb3JjZShcImNvbGxpc2lvblwiLCBkMy5mb3JjZUNvbGxpZGUoKS5yYWRpdXMoMjUpKVxuICAuZm9yY2UoJ2NlbnRlcicsIGZvcmNlQ2VudGVyKGNlbnRlclgsIGNlbnRlclkpKTtcblxuY29uc3Qgc2ltdWxhdGlvbiA9IGZvcmNlU2ltdWxhdGlvbihub2RlcylcbiAgLmZvcmNlKCdjaGFyZ2UnLCBmb3JjZU1hbnlCb2R5KCkuc3RyZW5ndGgoTUFOWV9CT0RZX1NUUkVOR1RIKS5kaXN0YW5jZU1heCg4MDApKVxuICAuZm9yY2UoXG4gICAgJ2xpbmsnLFxuICAgIGZvcmNlTGluayhsaW5rcykuZGlzdGFuY2UoKGxpbmspID0+IGxpbmsuZGlzdGFuY2UpXG4gIClcbiAgLmZvcmNlKFwiY29sbGlzaW9uXCIsIGQzLmZvcmNlQ29sbGlkZSgpLnJhZGl1cygxMCkpXG4gIC5mb3JjZSgnY2VudGVyJywgZm9yY2VDZW50ZXIoY2VudGVyWCwgY2VudGVyWSkpO1xuXG5cbmNvbnN0IGRyYWdJbnRlcmFjdGlvbiA9IGRyYWcoKVxuXHQub24oJ3N0YXJ0JywgKGV2ZW50LCBub2RlKSA9Pntcblx0XHRcdGlmICghZXZlbnQuYWN0aXZlKSBzaW11bGF0aW9uLmFscGhhVGFyZ2V0KDAuMykucmVzdGFydCgpO1xuICAgIFx0aWYgKCFldmVudC5hY3RpdmUpIHNpbXVsYXRpb24yLmFscGhhVGFyZ2V0KDAuMykucmVzdGFydCgpO1xuICAgICAgbm9kZS5meCA9IGV2ZW50Lng7XG4gICAgICBub2RlLmZ5ID0gZXZlbnQueTtcbiAgfSlcblx0Lm9uKCdkcmFnJywgKGV2ZW50LCBub2RlKSA9PiB7XG4gIG5vZGUuZnggPSBldmVudC54O1xuICBub2RlLmZ5ID0gZXZlbnQueTtcbiAgLy8gc2ltdWxhdGlvbjIuYWxwaGFUYXJnZXQoMCk7XG4gIC8vIHNpbXVsYXRpb24yLnJlc3RhcnQoKTtcbiAgLy8gc2ltdWxhdGlvbi5hbHBoYVRhcmdldCgwKTtcbiAgLy8gc2ltdWxhdGlvbi5yZXN0YXJ0KCk7XG59KVxuXHQub24oJ2VuZCcsKGV2ZW50LCBub2RlKSA9PiB7XG4gICAgICBpZiAoIWV2ZW50LmFjdGl2ZSkgc2ltdWxhdGlvbi5hbHBoYVRhcmdldCgwKTtcbiAgICAgIG5vZGUuZnggPSBudWxsO1xuICAgICAgbm9kZS5meSA9IG51bGw7XG4gICAvLyAgIGV2ZW50LnN1YmplY3QuZml4ZWQgPSB0cnVlO1xuICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xufSk7XG5cblxuY29uc3QgbGluZXMgPSBzdmdcbiAgLnNlbGVjdEFsbCgnbGluZScpXG4gIC5kYXRhKGxpbmtzKVxuICAuZW50ZXIoKVxuICAuYXBwZW5kKCdsaW5lJylcbiAgLmF0dHIoJ3N0cm9rZScsICdncmF5Jylcblx0LmF0dHIoJ3N0cm9rZS13aWR0aCcsJzAuNHB4Jyk7XG5cbmNvbnNvbGUubG9nKG5vZGVzWzFdLmlkKTtcblxuY29uc3QgY2lyY2xlcyA9IHN2Z1xuICAuc2VsZWN0QWxsKCdjaXJjbGUnKVxuICAuZGF0YShub2RlcylcbiAgLmVudGVyKClcbiAgLmFwcGVuZCgnY2lyY2xlJylcbiAgLmF0dHIoJ2ZpbGwnLCAobm9kZSkgPT4gbm9kZS5jb2xvciB8fCAnZ3JheScpXG4gIC5hdHRyKCdyJywgKG5vZGUpID0+IG5vZGUuc2l6ZSlcbiAgLmNhbGwoZHJhZ0ludGVyYWN0aW9uKTtcblxuY29uc3QgdGV4dCA9IHN2Z1xuICAuc2VsZWN0QWxsKCd0ZXh0JylcbiAgLmRhdGEobm9kZXMpXG4gIC5lbnRlcigpXG4gIC5hcHBlbmQoJ3RleHQnKVxuICAuYXR0cigndGV4dC1hbmNob3InLCAnbWlkZGxlJylcblx0LmF0dHIoJ2ZvbnQtc2l6ZScsICcxMHB4JylcbiAgLmF0dHIoJ2FsaWdubWVudC1iYXNlbGluZScsICdtaWRkbGUnKVxuICAuc3R5bGUoJ3BvaW50ZXItZXZlbnRzJywgJ25vbmUnKVxuXHQuc3R5bGUoJ2ZpbGwnLCAnZ3JheScpXG4gIC50ZXh0KChub2RlKSA9PiBub2RlLmlkLnN1YnN0cmluZygwLDgpKTtcblxuXG5zaW11bGF0aW9uLm9uKCd0aWNrJywgKCkgPT4ge1xuICBjaXJjbGVzLmF0dHIoJ2N4JywgKG5vZGUpID0+IG5vZGUueCkuYXR0cignY3knLCAobm9kZSkgPT4gbm9kZS55KTtcbiAgdGV4dC5hdHRyKCd4JywgKG5vZGUpID0+IG5vZGUueCkuYXR0cigneScsIChub2RlKSA9PiBub2RlLnkpO1xuXG4gIGxpbmVzXG4gICAgLmF0dHIoJ3gxJywgKGxpbmspID0+IGxpbmsuc291cmNlLngpXG4gICAgLmF0dHIoJ3kxJywgKGxpbmspID0+IGxpbmsuc291cmNlLnkpXG4gICAgLmF0dHIoJ3gyJywgKGxpbmspID0+IGxpbmsudGFyZ2V0LngpXG4gICAgLmF0dHIoJ3kyJywgKGxpbmspID0+IGxpbmsudGFyZ2V0LnkpO1xufSk7XG5cbnNpbXVsYXRpb24yLm9uKCd0aWNrJywgKCkgPT4ge1xuICBjaXJjbGVzLmF0dHIoJ2N4JywgKG5vZGUpID0+IG5vZGUueCkuYXR0cignY3knLCAobm9kZSkgPT4gbm9kZS55KTtcbiAgdGV4dC5hdHRyKCd4JywgKG5vZGUpID0+IG5vZGUueCkuYXR0cigneScsIChub2RlKSA9PiBub2RlLnkpO1xuXG4gIGxpbmVzXG4gICAgLmF0dHIoJ3gxJywgKGxpbmspID0+IGxpbmsuc291cmNlLngpXG4gICAgLmF0dHIoJ3kxJywgKGxpbmspID0+IGxpbmsuc291cmNlLnkpXG4gICAgLmF0dHIoJ3gyJywgKGxpbmspID0+IGxpbmsudGFyZ2V0LngpXG4gICAgLmF0dHIoJ3kyJywgKGxpbmspID0+IGxpbmsudGFyZ2V0LnkpO1xufSk7XG5cbnN2Zy5zZWxlY3RBbGwoJ2NpcmNsZScpXG4gIC5kYXRhKG5vZGVzKVxuLmFwcGVuZCgndGl0bGUnKVxuLnRleHQoKG5vZGUpID0+IG5vZGUuaWQpXG4iXSwibmFtZXMiOlsic2VsZWN0IiwiZm9yY2VTaW11bGF0aW9uIiwiZm9yY2VNYW55Qm9keSIsImZvcmNlTGluayIsImZvcmNlQ2VudGVyIiwiZHJhZyJdLCJtYXBwaW5ncyI6Ijs7O0VBRU8sTUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDO0VBQ2pCLE1BQU0sYUFBYSxHQUFHLEVBQUUsQ0FBQztFQUN6QixNQUFNLEtBQUssR0FBRyxFQUFFLENBQUM7QUFDeEI7QUFDQTtFQUNBLE1BQU0sY0FBYyxHQUFHLEVBQUUsQ0FBQztFQUMxQixNQUFNLGFBQWEsR0FBRyxFQUFFLENBQUM7RUFJekIsTUFBTSxrQkFBa0IsR0FBRyxFQUFFLENBQUM7RUFDOUI7RUFDQSxNQUFNLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztFQUd0QixNQUFNLGtCQUFrQixHQUFHLENBQUMsR0FBRyxDQUFDO0VBQ2hDLE1BQU0saUJBQWlCLEdBQUcsQ0FBQyxHQUFHLENBQUM7QUFDdEM7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0FBQ0E7RUFDQSxNQUFNLFdBQVcsR0FBRyxDQUFDLElBQUksS0FBSztFQUM5QixFQUFFLElBQUksQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUFDO0VBQzdCLEVBQUUsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENB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