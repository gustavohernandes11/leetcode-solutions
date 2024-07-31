defmodule Solution do
  @spec two_sum(nums :: [integer], target :: integer) :: [integer]
  def two_sum(nums, target) do
      nums
      |> Enum.with_index()
      |> serialize(target, %{})
  end

  defp serialize([], _target, _map) do [] end
  defp serialize([{num, index} | rest], target, map) do
      complement = target - num

      case Map.get(map, complement) do
          nil ->
              serialize(rest, target, Map.put(map, num, index))
          complement_index ->
              [complement_index, index]
      end
  end
end
