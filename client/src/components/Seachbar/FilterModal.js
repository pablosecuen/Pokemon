import { FilterModalDiv } from "./StyledModal";
import FilterType from "../Filter/FilterType";

export default function FilterModal({ active }) {
  return (
    <FilterModalDiv active={active}>
      <FilterType></FilterType>
    </FilterModalDiv>
  );
}
