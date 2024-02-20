public class Solution {
    public int RomanToInt(string s) {
        string[] arr = s.Select(x => x.ToString()).ToArray();
        int result = 0;
        
        var symbolValue = new Dictionary<string, int>() {
            { "I", 1 },
            { "V", 5 },
            { "X", 10 },
            { "L", 50 },
            { "C", 100 },
            { "D", 500 },
            { "M", 1000 },
        };

        for (int i = 0; i < arr.Length; i++) {
            int curr = symbolValue[arr[i]];
            int? next = (i + 1 >= arr.Length) ? null : symbolValue[arr[i + 1]];

            if (next != null && curr < next) {
                result += (int)next - curr;
                i++;
            } else {
                result += curr;
            }
        }

        return result;
    }
}
