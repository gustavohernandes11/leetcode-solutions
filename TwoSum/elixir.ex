defmodule Solution do
  defp serialize(_index_value_map, _index, [], _target) do [] end
  defp serialize(index_value_map \\ %{}, index, [num | rest], target) do
      complement = target - num

      if Map.has_key?(index_value_map, complement) do
          complement_index = Map.get(index_value_map, complement)
          [complement_index, index]
      else
          serialize(Map.put(index_value_map, num, index), index + 1, rest, target)
      end
  end

  @spec two_sum(nums :: [integer], target :: integer) :: [integer]
  def two_sum(nums, target) do
      serialize(%{}, 0, nums, target)
  end
end
