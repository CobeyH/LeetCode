/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {

    return function(n: number): number {
        let start = 0;
        let end = n - 1;
        let pivot = Math.round(end / 2);
        let wasBad = isBadVersion(start + 1);
        let isBad = isBadVersion(pivot + 1);
        // If the first one is bad, immediately return 1;
        if(wasBad) return 1;
        let prevIndex = start;

        while(Math.abs(prevIndex - pivot) > 1 || (!isBad && !wasBad)) {
            if(isBad) {
                end = pivot;
            }  else {
                start = pivot;
            } 
            prevIndex = pivot;
            wasBad = isBad;
            pivot = Math.round((end + start) / 2); 
            isBad = isBadVersion(pivot + 1);
        }
        return isBad == wasBad ? Math.min(prevIndex, pivot) + 1 : isBad ? pivot + 1 : prevIndex + 1;
    };
};
