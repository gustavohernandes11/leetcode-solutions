int findMostRepeated(int *array, int length)
{
    int mode = 0;
    int max_count = 0, actual_count = 0;
    for (int i = 0; i < length; i++)
    {
        actual_count = 0;
        for (int j = 0; j < length; j++)
        {
            if (array[j] == 0)
                continue;
            if (array[i] == array[j])
            {
                actual_count++;
            }
        }
        if (actual_count > max_count)
        {
            max_count = actual_count;
            mode = array[i];
        }
    }
    return mode;
}
int findRange(int *array, int length)
{
    int min = 0;
    int max = 0;
    int actual_count = 0;

    for (int i = 0; i < length; i++)
    {
        if (array[i] != 0)
        {
            if (!min)
                min = array[i];

            if (array[i] > max)
                max = array[i];

            if (array[i] < min)
                min = array[i];
        }
    }

    return max - min;
}
bool equalFrequency(char *word)
{
    int *letters_frequency = calloc(26, sizeof(int));
    int length = strlen(word);

    for (int i = 0; i < length; i++)
    {
        letters_frequency[word[i] - 'a']++;
    }

    bool can_remove_one = false;
    int common = findMostRepeated(letters_frequency, 26);
    int range = findRange(letters_frequency, 26);

    for (int k = 0; k < 26; k++)
    {
        if (letters_frequency[k])
        {
            if (length <= 3)
                return true;

            letters_frequency[k]--;
            int new_range = findRange(letters_frequency, 26);
            if (new_range == 0)
            {
                free(letters_frequency);
                return true;
            }
            letters_frequency[k]++;
        }
    }

    free(letters_frequency);
    return false;
}
