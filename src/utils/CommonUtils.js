import _ from "lodash";
import URI from "urijs";

export const DeepClone = (o) => {
    const output = _.cloneDeep(o);
    return output;
};

