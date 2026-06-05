import { describe, it, expect } from "vitest";
import { cx, filterProps } from "../utils.js";

describe("cx", () => {
  it("joins multiple class strings", () => {
    expect(cx("foo", "bar", "baz")).toBe("foo bar baz");
  });

  it("filters out falsy values", () => {
    expect(cx("foo", undefined, null, false, "bar")).toBe("foo bar");
  });

  it("returns empty string when all values are falsy", () => {
    expect(cx(undefined, null, false)).toBe("");
  });

  it("returns single class unchanged", () => {
    expect(cx("only")).toBe("only");
  });

  it("handles empty call", () => {
    expect(cx()).toBe("");
  });
});

describe("filterProps", () => {
  it("removes listed keys from props", () => {
    const props = { size: "md", variant: "solid", className: "foo" } as const;
    const result = filterProps(props, ["size", "variant"]);
    expect(result).toEqual({ className: "foo" });
  });

  it("leaves unlisted keys intact", () => {
    const props = { id: "btn", disabled: true, loading: false };
    const result = filterProps(props, ["loading"]);
    expect(result).toEqual({ id: "btn", disabled: true });
  });

  it("returns shallow copy — does not mutate original", () => {
    const props = { a: 1, b: 2 };
    filterProps(props, ["a"]);
    expect(props).toEqual({ a: 1, b: 2 });
  });

  it("handles empty keys array", () => {
    const props = { x: 1, y: 2 };
    expect(filterProps(props, [])).toEqual({ x: 1, y: 2 });
  });
});
