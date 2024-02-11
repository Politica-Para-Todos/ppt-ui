import { ElectoralDistrict } from "../../utils/constants";

export const electoralDistrictDropdown = (): string[] => {
  const electoralDistricts = Object.values(ElectoralDistrict).map(dis => dis.toString());
  electoralDistricts.push('Todos');

  return electoralDistricts;
}

export const convertToLabel = (electoralDistrict: ElectoralDistrict) => electoralDistrict as string;
// electoralDistrictDropdwon.filter(element => element.value == electoralDistrict)[0].label;

export const convertToValue = (label: string) => label as ElectoralDistrict;
// electoralCircleDropdown.filter(option => option.label == label)[0].value;

export const convertElectoralDistrictToUrl = (district: string) => district.toLowerCase().replace('_', '-');

export const electoralDistrictList = (): ElectoralDistrict[] => Object.values(ElectoralDistrict);